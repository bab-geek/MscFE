// Interactive Quiz Module for Practice Questions

class Quiz {
    constructor() {
        this.currentLesson = null;
        this.questions = [];
        this.userAnswers = {};
        this.score = 0;
    }

    // Parse markdown practice questions into interactive format
    parseQuestions(markdown) {
        const questions = [];
        const sections = markdown.split(/^## Section \d+:/gm);
        
        sections.forEach(section => {
            if (!section.trim()) return;
            
            // Match questions
            const questionMatches = section.matchAll(/### Question \d+\.\d+ \(([★]+)\)\s+(.*?)\n\n(.*?)(?=\*\*Solution:|### Question|\n## |$)/gs);
            
            for (const match of questionMatches) {
                const difficulty = match[1];
                const title = match[2].trim();
                const content = match[3].trim();
                
                // Extract solution
                const solutionMatch = section.match(new RegExp(`### ${match[0].split('\n')[0]}.*?\n\n.*?\*\*Solution:\*\*(.*?)(?=### Question|## Section|$)`, 's'));
                const solution = solutionMatch ? solutionMatch[1].trim() : '';
                
                questions.push({
                    id: `q_${questions.length + 1}`,
                    difficulty,
                    title,
                    content,
                    solution,
                    type: this.detectQuestionType(content),
                    userAnswer: null,
                    isCorrect: null
                });
            }
        });
        
        this.questions = questions;
        return questions;
    }

    detectQuestionType(content) {
        // Detect if it's multiple choice, true/false, or open-ended
        if (content.match(/^[a-e]\)/gm)?.length >= 2) {
            return 'multiple-choice';
        }
        if (content.toLowerCase().includes('true or false') || content.toLowerCase().includes('true/false')) {
            return 'true-false';
        }
        if (content.includes('Calculate') || content.includes('Compute') || content.includes('Find')) {
            return 'calculation';
        }
        return 'open-ended';
    }

    renderQuiz(containerId) {
        const container = document.getElementById(containerId);
        if (!container || this.questions.length === 0) return;

        const quizHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>Interactive Practice Quiz</h2>
                    <div class="quiz-stats">
                        <span class="stat">Questions: ${this.questions.length}</span>
                        <span class="stat">Answered: <span id="answeredCount">0</span></span>
                        <span class="stat">Score: <span id="scoreDisplay">0%</span></span>
                    </div>
                </div>
                
                <div class="quiz-controls">
                    <button class="btn btn-primary" onclick="quiz.showAllQuestions()">View All Questions</button>
                    <button class="btn btn-secondary" onclick="quiz.showResults()">Show Results</button>
                    <button class="btn btn-outline" onclick="quiz.reset()">Reset Quiz</button>
                </div>

                <div id="quizQuestions" class="quiz-questions">
                    ${this.renderAllQuestions()}
                </div>
            </div>
        `;

        container.innerHTML = quizHTML;
        this.attachEventListeners();
    }

    renderAllQuestions() {
        return this.questions.map((q, index) => this.renderQuestion(q, index)).join('');
    }

    renderQuestion(question, index) {
        const isAnswered = question.userAnswer !== null;
        const showFeedback = isAnswered;

        return `
            <div class="quiz-question ${isAnswered ? 'answered' : ''}" id="question-${question.id}">
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="question-difficulty">${question.difficulty}</span>
                    ${isAnswered ? `<span class="question-status ${question.isCorrect ? 'correct' : 'incorrect'}">${question.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>` : ''}
                </div>
                
                <div class="question-title">${question.title}</div>
                
                <div class="question-content">
                    ${this.formatQuestionContent(question.content)}
                </div>

                <div class="answer-section">
                    ${this.renderAnswerInput(question)}
                </div>

                ${showFeedback ? `
                    <div class="feedback ${question.isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
                        <div class="feedback-header">
                            ${question.isCorrect ? '🎉 Correct!' : '🤔 Let\'s review'}
                        </div>
                        <div class="solution-content">
                            <strong>Solution:</strong>
                            ${this.formatSolution(question.solution)}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderAnswerInput(question) {
        if (question.type === 'multiple-choice') {
            const options = this.extractOptions(question.content);
            return `
                <div class="answer-input multiple-choice">
                    ${options.map(opt => `
                        <label class="option">
                            <input type="radio" name="answer-${question.id}" value="${opt.key}" 
                                   ${question.userAnswer === opt.key ? 'checked' : ''}
                                   onchange="quiz.saveAnswer('${question.id}', this.value)">
                            <span>${opt.key}) ${opt.text}</span>
                        </label>
                    `).join('')}
                </div>
                <button class="btn btn-primary" onclick="quiz.submitAnswer('${question.id}')">
                    ${question.userAnswer ? 'Update Answer' : 'Submit Answer'}
                </button>
            `;
        } else if (question.type === 'true-false') {
            return `
                <div class="answer-input true-false">
                    <label class="option">
                        <input type="radio" name="answer-${question.id}" value="true"
                               ${question.userAnswer === 'true' ? 'checked' : ''}
                               onchange="quiz.saveAnswer('${question.id}', this.value)">
                        <span>True</span>
                    </label>
                    <label class="option">
                        <input type="radio" name="answer-${question.id}" value="false"
                               ${question.userAnswer === 'false' ? 'checked' : ''}
                               onchange="quiz.saveAnswer('${question.id}', this.value)">
                        <span>False</span>
                    </label>
                </div>
                <button class="btn btn-primary" onclick="quiz.submitAnswer('${question.id}')">
                    ${question.userAnswer ? 'Update Answer' : 'Submit Answer'}
                </button>
            `;
        } else {
            return `
                <div class="answer-input open-ended">
                    <textarea 
                        id="answer-${question.id}" 
                        placeholder="Type your answer here..."
                        rows="4"
                        onchange="quiz.saveAnswer('${question.id}', this.value)"
                    >${question.userAnswer || ''}</textarea>
                </div>
                <button class="btn btn-primary" onclick="quiz.submitAnswer('${question.id}')">
                    ${question.userAnswer ? 'Update Answer' : 'Submit Answer'}
                </button>
            `;
        }
    }

    extractOptions(content) {
        const lines = content.split('\n');
        const options = [];
        
        lines.forEach(line => {
            const match = line.match(/^([a-e])\)\s*(.+)/);
            if (match) {
                options.push({ key: match[1], text: match[2].trim() });
            }
        });
        
        return options;
    }

    formatQuestionContent(content) {
        // Convert markdown-style content to HTML
        let html = content;
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        html = html.replace(/\n/g, '<br>');
        return html;
    }

    formatSolution(solution) {
        let html = solution;
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        html = html.replace(/\n\n/g, '</p><p>');
        html = html.replace(/\n/g, '<br>');
        return `<p>${html}</p>`;
    }

    saveAnswer(questionId, answer) {
        const question = this.questions.find(q => q.id === questionId);
        if (question) {
            question.userAnswer = answer;
        }
    }

    submitAnswer(questionId) {
        const question = this.questions.find(q => q.id === questionId);
        if (!question || !question.userAnswer) {
            alert('Please provide an answer before submitting.');
            return;
        }

        // Check answer
        question.isCorrect = this.checkAnswer(question);
        
        // Update stats
        this.updateStats();
        
        // Re-render the question to show feedback
        const questionElement = document.getElementById(`question-${questionId}`);
        const index = this.questions.indexOf(question);
        questionElement.outerHTML = this.renderQuestion(question, index);
        
        // Scroll to feedback
        setTimeout(() => {
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }

    checkAnswer(question) {
        if (question.type === 'multiple-choice' || question.type === 'true-false') {
            // Extract correct answer from solution
            const correctAnswer = this.extractCorrectAnswer(question.solution);
            return question.userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        } else {
            // For open-ended questions, just mark as submitted
            return true; // User needs to self-check
        }
    }

    extractCorrectAnswer(solution) {
        // Try to extract answer from patterns like "Answer: X" or "**Answer**: X"
        const patterns = [
            /\*\*Answer\*\*:\s*([a-e])/i,
            /Answer:\s*([a-e])/i,
            /\*\*([a-e])\*\*\s*-/i,
            /correct answer is\s*([a-e])/i,
            /\*\*True\*\*/i,
            /\*\*False\*\*/i
        ];

        for (const pattern of patterns) {
            const match = solution.match(pattern);
            if (match) {
                return match[1] || (pattern.source.includes('True') ? 'true' : 'false');
            }
        }

        return '';
    }

    updateStats() {
        const answeredCount = this.questions.filter(q => q.userAnswer !== null).length;
        const correctCount = this.questions.filter(q => q.isCorrect === true).length;
        const score = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

        document.getElementById('answeredCount').textContent = answeredCount;
        document.getElementById('scoreDisplay').textContent = `${score}%`;
    }

    showAllQuestions() {
        const container = document.getElementById('quizQuestions');
        container.innerHTML = this.renderAllQuestions();
        this.attachEventListeners();
    }

    showResults() {
        const answeredCount = this.questions.filter(q => q.userAnswer !== null).length;
        
        if (answeredCount === 0) {
            alert('Please answer at least one question first!');
            return;
        }

        const correctCount = this.questions.filter(q => q.isCorrect === true).length;
        const score = Math.round((correctCount / answeredCount) * 100);

        const resultsHTML = `
            <div class="quiz-results">
                <h2>Quiz Results</h2>
                <div class="results-summary">
                    <div class="result-stat">
                        <div class="stat-value">${answeredCount}/${this.questions.length}</div>
                        <div class="stat-label">Questions Answered</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${correctCount}</div>
                        <div class="stat-label">Correct Answers</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${score}%</div>
                        <div class="stat-label">Score</div>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="quiz.showAllQuestions()">Review Answers</button>
            </div>
        `;

        document.getElementById('quizQuestions').innerHTML = resultsHTML;
    }

    reset() {
        if (!confirm('Are you sure you want to reset all answers?')) return;
        
        this.questions.forEach(q => {
            q.userAnswer = null;
            q.isCorrect = null;
        });
        
        this.showAllQuestions();
        this.updateStats();
    }

    attachEventListeners() {
        // Event listeners are handled inline in the HTML
    }
}

// Global quiz instance
const quiz = new Quiz();

// Function to activate quiz mode for practice questions
function activateQuizMode(markdown, containerId) {
    quiz.parseQuestions(markdown);
    quiz.renderQuiz(containerId);
}

// Make functions globally available
window.quiz = quiz;
window.activateQuizMode = activateQuizMode;

