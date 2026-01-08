MODULE 1 | LESSON 3
BUYING AND SELLING SHORT
Reading Time	150 minutes
Prior Knowledge	Interest, Interest Rates, Term To Maturity, Bond Definition
Keywords	Discounting, Credit Risk, Buy-Side, Sell-Side, Shorting, Financing

In the previous lesson, we examined ways in which the lender can have their risk mitigated. We also saw that aside from loans, a borrower can issue a bond, which would then make interest payments to the bond holder. In this lesson, we examine bonds in more detail. We'll discuss buying a bond and selling a bond short. Note that this is different from selling a bond. We'll conclude by studying the bid-ask spread.

1. Bond Pricing via Discounting Cash Flows
What is the price of a bond? A bond entitles us to receive a certain number of cash flows at pre-specified times. In our earlier example at the end of Lesson 2, for instance, the 2-year Treasury bond made 4 interest rate payments and 1 principal repayment at specific dates. One could be tempted to say "let's sum up the value of all the individual cash flows and that is the value or price of our bond!". Well, not quite because the cash flows happen at different moments in time and we are by now aware that there is such a thing as the time value of money. So how do we treat different cash flows at various times? We already have the mathematical tools to solve this problem, and we will do so in the next section of this lesson.

What we are going to do is find the present value of all the relevant cash flows at different times. Doing this requires that there is a discount rate at which we can convert future cash flows to their value (of money) today.

Suppose we will receive $1,000 in one year and that the interest rate at which we discount is 4%. Then what is $1,000 in one year worth in today's money? The formula for present value tells us that the present value of $1,000 in one year is

The number  is the discount factor to use for 1 year if we assume that the relevant interest rate to use is 4%.

Similarly, if we are expected to receive $3,000 in 2 years, what is the value of $3,000 in 2 years in today's money? Assuming that the relevant interest rate is always 4%, then at the discounted value today, $3,000 in 2 years would be

The number  is the discount factor to use for a 2-year investment if we assume, again, that the relevant interest rate to use is 4%.

We are now ready to price a bond.

2. Actual Pricing of a Bond
We show how to actually price a bond using an example and detailing all cash flows and calculations.

Suppose that Bond PQU has the following characteristics:

nominal amount (par value): $1,000,000;
coupon rate: 4.5%
coupon payment frequency: annual
maturity: 5 years from now
current level of interest rate 5% (this will be our relevant interest rate for discounting).
We start by listing all the relevant cash flows:

in 1 year, coupon interest payment of $1,000,000 X 4.5% = $45,000;
in 2 years, coupon interest payment of $45,000;
in 3 years, coupon interest payment of $45,000;
in 4 years, coupon interest payment of $45,000;
in 5 years, coupon interest payment of $45,000 plus the principal repayment of $1,000,000.
Figure 1: Cashflows Add Up Every Year.

FM_M1_L3_Cash_Flows.png
Now, that we have all the cash flows well organized, we need to discount each of them and then we sum that up. As such, the value of the bonds can be calculated as:

Hence, we found out that the price of this bond
(at time 0, today) is $978,352.62, less than the nominal value of $1,000,000 at which we bought it. When this happens, we say that the bond is trading below par. If the bond traded above the par value, we would say that the bond is trading above par instead.

You can change discount rate, coupon rate, and even principal amount in the following spreadsheet and find the price of the bond.

Why is the price of the bond trading below par in our example? Well, our bond pays a coupon rate of 4.5%, but the current coupon rate level is 5%. Now, would you invest $1,000,000 to pay a bond with a coupon rate of 4.5% when you could buy a different one that pays a coupon rate of 5%? I bet that your answer is no. In other words, if you want to sell the bond to someone instead of holding on to it until maturity right now, you have to sell it below par or nobody would buy it.

An attentive student has probably noticed that the mathematical reason for the price being below par is that we are discounting interest payments at a higher rate than the coupon rate.

Go to the spreadsheet above and try changing 5% to 4%, 6%, or 4.5% and notice what happens to the bond price. Essentially, higher interest rates mean lower bond prices.

3. Implied Yields to Maturity
The coupon rate or bond yield for a bond trading at par (i.e. at face value) is very easy to calculate:

Suppose that we have a bond with the following characteristics:

nominal value: $1,000.00;
current market price: $1,000.00;
coupon rate: = 4%;
interest payment frequency: annual; and
maturity: 4 years.
If we ask what is the bond yield in this case where the bond is trading at par value, the answer is very simple as it is the coupon rate, i.e., 4%.

However, this is not always the case; the price of bonds may change and we could be in a situation like the following:

nominal value: $1,000.00
current price: $950.00
coupon rate: 4%
payment frequency: annual; and
maturity: 4 years.
As we would pay the bond $950 and not $1,000, it is intuitive that we should expect a higher yield from the investment in this case. But how do we find the correct bond yield?

Assuming that the bond still has 4 years to maturity and that we hold it until it matures, we can calculate the implied bond yield to maturity (YTM) by solving the following equation with respect to 

This is a highly non-linear equation, but it can be solved using numerical analysis or a spreadsheet (for instance Goal Seek in Google Sheets). Doing this shows that the implied yield to maturity is 5.424%, quite a bit more than the coupon rate of 4%. You can use this spreadsheet to solve the problem.

Figure 2: Inverse Relationship between Bond Price and Yields

FM_M1_L3_Bond_Price_vs_Yields.png
Is this all the math we need for bonds? We are close but not quite there yet. So far, we have assumed that the bonds pay annual interest rate coupons. What if they paid those coupons semi-annually as is mostly the case in the U.S.?
The principles behind pricing a bond do not change. However, the formula is a tad more complex, and we will provide it in a moment.

Let

 be the price of a bond that we want to compute;
 be the number of years to maturity;
 be the annual coupon rate;
 be the current annual prevailing rate;
 be the principal amount (also known as the notional or par amount) of the bond; and
the interest payment frequency be semi-annual.
Then, the price  of the bond is found using the following formula

Note that in the formula, all interest rates are divided by 2 and we have  payments as the bond pays two coupons every year.

The last equation can be easily used in a spreadsheet if one does not feel inclined to do some geometric series math.

Also, if we were given the current market price of the bond, say  we could solve the equation above with respect to x and determine the implied YTM associated with a price of  for the bond.

Now we know enough bond mathematics to solve many bond problems.

A serious student may be asking whether it is typical that the coupon rates and the current interest rates are always fixed. In many cases the coupon rates are fixed, but there are bonds for which the coupon rates could be indexed to account for inflation (i.e., like paying a real rate instead of a nominal one). Also the current rates, which we use for discounting, can and do change over time. This is not the end of the world. Yes, we will no longer be able to get nice elegant formulae to do our calculations, but spreadsheets are still viable tools. We can indicate the general formula, which would become

and which allows for the cash flows to change with the index  and for the interest rate we use to discount the cash flows to change with the length of time.

How do we get the  that appear in the formula? They are usually found from zero-coupon bonds of different maturities, if they are available and traded.

A zero-coupon bond, also known as a "zero," is a bond that does not make interest payments. Instead, it trades at a (usually deep) discount to its face value. For instance, we could have a zero-coupon bond like the following:

face value: $1,000;
maturity: 10 years; and
current market price $630.
In other words, we can buy it for $630, we will receive no interest payments (note that a coupon rate is not specified), and in 10 years' time, $1,000 is returned to us. We can calculate our yield very simply using the math of present and forward values seen in Lesson 1:

Assuming that this zero-coupon bond is issued by a reliable issuer and it is fairly liquid (so that its market price is also reliable), we could use the result just found to say that 

It is worth mentioning that, while zeroes carry the usual market risks for investors, in particular when dealing with long maturities, they also contain a possibly sizable credit risk as the company that issues the bond could end up defaulting and without having paid investors any interest.

When we look at a bond issued by the UK Treasury or the U.S. Treasury, we see that the yield for a two-year bond is 3%. However, if we were to look at a bond issued by a company, call it XYZ, then we see that the yield is 4%. Why would two different issuers have two different yields for the same maturity? The answer is an old friend: credit risk, the topic of our next section.

4. Credit Risk
Credit risk is always an issue for a lender. Consider the following situation: When you are depositing funds in an account, you are “lending” the bank your funds for a period. Remember, you are protected by institutions such as the depository insurance corporation. When you are a bond buyer, you are also a lender. The bond buyer is supplying the funds up front to the bond issuer. The bond issuer is the one who is borrowing. They are the ones who are making prompt interest and principal payments. Therefore, the credit risk is born by the bond buyer, which is acting as the lender here.

From the bond buyer’s perspective, why would they want more yield from the corporation than they would from the federal government? The answer comes, in part, from credit risk. You see, the credit risk of the federal government bonds is effectively zero. That is because the federal government has protections that will eliminate the chance of default. (There are historical cases where countries have defaulted on their bonds, but at this time, we’ll assume government bonds are risk-free). This is why the yield associated with government-issued bonds is called the risk-free rate. So, when you look at bonds issued by other governments outside your country, these are also called risk-free rates in their sovereignty. The risk-free rate return refers to an interest rate for a given maturity that is default free. That means that the issuer is considered to have zero probability of defaulting on the payments.

Certain federal governments can safely be considered risk free because they have advantages that corporations do not have. These advantages include setting monetary policies, printing new currencies, and increasing taxes. (Note that not all countries have debt that is considered to be risk free). These revenue-generating actions can ensure that they have sufficient funds to meet their liabilities. However, the company XYZ does not have these activities available to them. They could either increase revenue, cut costs, or issue new longer-term debt to pay off short-term debt. Therefore, XYZ-issued bonds have some probability of default. (We’ll talk much more about this in a later module.)

Depending on the quality of that issuer, the bond must attract investors or prospective buyers by offering a higher yield. The buyers are aware of this and realize that the extra yield does not come for free because defaults can and do happen. If you are a prospective bond buyer, you may look at the risk-free products, which will have lower yields for the same maturity that the risky bonds have. As the buyer, it is prudent to be aware of these credit risks so that when you compare the yields, you're taking into account the amount of uncertainty of the issuer as to whether you receive those funds. If you felt that it was worth the extra risk for the extra yield of risky bonds, then perhaps you would be interested in buying the bonds from XYZ. Keep in mind that the higher yield of XYZ bonds means that the price that you paid today, for the same maturity and coupon, is less than that price for the risk-free bond. But suppose you felt that XYZ bonds were overpriced. In other words, you do not want to buy an XYZ bond. Instead, you think it's overpriced and would like to sell it, but you do not own it. To understand this, let us first clarify the difference between two types of institutions: the buy-side and the sell-side, the topic of our next section.

5. Buy-Side vs. Sell-Side
The terms buy-side and sell-side at first seem to convey the idea of one side buying assets and the other side selling assets. This, however, is a misunderstanding. The buy-side refers to the market that is investing on behalf of others. The buy-side includes institutions that collect funds from investors, workers, pension holders, labor unions, etc., and seeks to invest on their behalf, with their stated investment interests and risk tolerances. The buy-side, in other words, is professionally managing client money. At times, those investment managers may decide to buy investments. At times, they want to realize the capital gains on those investments and sell the investments. As such, the buy side is both buying and selling securities, but they are doing so on behalf of investors.

The sell-side, on the other hand, is NOT acting on behalf of investors but rather is acting on behalf of the investment bank. The sell-side’s primary responsibility is to make markets. Market-making means that they are willing to engage with the buy-side (or even other sell-side firms) by both offering securities to sell and bidding on securities to buy. You see, the buy-side is trading on behalf of customers; they are looking for opportunities that appeal to their customer base. The sell-side, on the other hand, is simply trading according to the needs and desires of the buy-side and other sell-side firms who want to trade. Sell-side trades make what is known as a two-sided market.

How does each side effectively make money? In broad terms, the buy-side makes profit by earning a fee for managing the funds. In addition to a management fee, they may collect fees related to the trading in the account or consulting with clients, and they might collect a performance incentive fee. If the fund earns above a certain amount (which may be 0%), then the fund may take a percentage of the amount earned. Effectively, the buy-side acts as a fiduciary for its clients by offering professional management and is paid both a fixed fee and potentially an incentive fee for good performance.

The sell-side, however, makes money in a more complicated way. To understand this, let us look at an example by considering a buy-side firm called PDQ. Let us say that they wish to set up a brokerage account with a sell-side firm called ABC. ABC is willing to do two things at any given time:

ABC is willing to sell shares of our risky bond XYZ at $101.00

ABC is willing to buy shares of our risky bond XYZ at $100.50.

(Of course, that price may be displayed in a yield term.)

The price at which ABC is offering to sell is known as the offer price. Like everything, there is also another way to refer to this: the ask price. We will use offer price and ask price interchangeably since they mean the same thing.

The price at which ABC is willing to buy is known as the bid price. In the next section, we will discuss the difference between these.

6. Bid-Ask Spread
The bid price is the price at which someone is willing to buy. The ask price is the price at which someone is willing to sell. The difference between these two prices is known as the bid-ask spread. The sell-side makes a profit by this bid-ask spread. Imagine that there was no bid-ask spread: you would be able to buy and sell at the exact same price. So which financial institution could afford to supply trading to market participants without earning any money for it? Well, none.

If you have ever been to an airport kiosk that provides a foreign exchange service, then you will understand this. Suppose you arrive at the airport wanting to convert euros to Japanese yen. Your 100 euros bought you 12,800 yen. Then, you find out that your flight got cancelled. So you return to the airport kiosk and convert the 12,800 yen back to euros, but you only get 95 euros. The kiosk makes money by selling you yen at a high price and buying back the yen at a low price. If you were to do this repeatedly, you would run out of money. The difference between the two prices is known as the bid-ask spread. This is how the foreign exchange kiosk attendant earns money. In addition to the bid-ask spread, they may have market transaction costs, such as commissions or transaction fees.

The same ideas apply to sell-side market makers. The bid-ask spread, and any transaction costs, are part of the revenue of the sell-side. You can see that the sell-side has a tough job because to buy and sell, they must have inventory amounts that may drive them to either hold too much of a security or run out of it and borrow the security. Indeed, it is possible to sell things that you don't even have. So, how is it possible to sell things that you do not have? How is it possible that the sell-side can consistently sell a security, even if they do not have any? For this, we turn to the next section: shorting.

7. Shorting
One of the lessons you learn early in finance is that you should “buy low and sell high.” This means that if you see a security that you like, you use funds that you have to purchase it, hold onto it until the price goes up, and then sell it at a higher price, realizing the capital gain as a profit, less any fees like bid-ask spreads and transaction fees.

The idea of buying low and selling high is very straightforward, but less so is that the order can be reversed. In other words, what if you were to “sell high, then buy low?” This is indeed a trading strategy. But how can you sell something you don’t own? This is known as shorting. Shorting refers to borrowing a security that you do not own, selling it in the marketplace, and receiving cash for it. The short seller then hopes and waits for the price to drop; if and when it does, the short seller buys the security at this lower price. When that happens, the short seller is covering the short. Once they take possession of the security, they return it to the party that lent it to them. If they sold at a high price and covered at a lower price, they still make a profit: selling price - buying price.

So shorting is somewhat of a complex transaction. It involves:

Borrowing something that you do not own.
Selling it in the marketplace.
Paying the lender (owner of record) of the security a fee (that increases with time).
Buying (covering) the short later.
Returning the security to its original owner.
Short sellers trade because they think a security is overvalued. They prefer to sell it now at what they believe is an inflated price. They receive cash for it, which they can deposit in an account for any costs associated with the short. If all goes well, then the price does indeed drop and the short seller can cover the security, return it to the owner, and complete their responsibilities. Doing so has earned them whatever the capital gain is (high – low), less any transaction fees.

The lender of the security, in some ways, is like the lender of our loan examples. The borrower of the security, the short seller, is like the borrower of our loan examples. Therefore, we have seen this familiar scenario before. Instead of lending cash, we are lending securities. What is the same and what is different?

In principle, it might seem that borrowing shares creates a credit risk for the lender in the sense that the borrower may not be able to return the securities (like the cash borrower who is not able to pay back the loan). However, selling short is a bit more complicated and the credit risk is quite small if the shares are borrowed via a brokerage firm. Very few investors would lend shares to someone they barely know or do not know at all. To be able to borrow shares, we will need a margin account, i.e., an account with a brokerage firm that allows us to borrow money in order to buy stocks. Borrowing shares is, for all practical purposes, like a margin loan on which we pay interest on an outstanding debt (the value of the shares borrowed). To be able to open a margin account, we would need to be approved by the brokerage firm.

Furthermore, in the U.S., to be able to make trades in our margin account, we need to have cash or stock equities in the same margin account as collateral in an amount at least equal to 50% of the short position. Once we receive the shares and sell them, we won't be able to liquidate the cash we receive from the short sale. If this is not enough, we will be required to keep enough equity in the account to serve as collateral, which is at least 25% per exchange rules, but our broker may set the margin higher, depending on how risky the stock is and the value of our short position. Hence, if the value of stock goes up instead of down, we may be asked to inject further collateral on our margin account, or the broker can liquidate our position and return the shares to the original owner.

Example.

The shares of MNQ are currently trading at $80/share.
Fund ABC's analysts believe that the shares are overvalued and that they should fall to $60/share.
ABC's portfolio manager decides to short the shares.
The portfolio manager contacts the fund's broker who is able to locate (that is the technical term used for finding the shares) shares of MNQ. The broker has 500,000 shares to lend at an annual interest rate of 5% as there are not many shares of MNQ available.
The 500,000 shares are sold short at $79.20/share.
After 6 months, the shares of MNQ have fallen but not as much as hoped, and they are trading at $72/share. The portfolio manager decides to unwind the position and buy back the shares, which are purchased back at $72.33/share.
Compute Fund ABC's profit from this investment, assuming no interest payments to ABC's cash in margin account.

Answer. The amount invested (borrowing the shares) is

The proceeds from the short sale are

When we buy back the shares after 6 months, we spend

Hence, the profit from the short sale is

The amount of interest we need to pay for having borrowed the shares for 6 months (financing cost) is (using compound interest)

Hence, the profit from the trade is $2,447.196.94.

8. Financing Short Positions: More Details
Someone is only willing to lend you a security if there is something in it for them. Whoever lends out the security will want to receive an amount of income for it. This is known as the financing cost. Imagine that you are the owner of XYZ Bond. As a bondholder, you make money by receiving interest payments. However, there is another way you can make money. You can agree that your broker on the sell-side can lend out your bonds to another customer. When you do so, you will receive whatever the financing cost is from that short seller. Financing provides extra income to the owner of a security.

When someone lends out the security, they want to be assured that they receive this financing rate from the short seller. In addition, they also get the interest from the bond as if they still owned it. In other words, the short seller sells the bond to another customer. The person that buys those bonds now owes them. The original owner merely has an “I.O.U.” from the short seller. However, the true cost of shorting requires you to make good on all income that the ownership bestowed. When the issuer makes a coupon payment, the short seller is expected to make that payment, as part of the financing cost, to the original owner. Otherwise, the owner would have forfeited that interest income. Remember, the original bond holder is looking to make extra income by lending out their bonds, not substituting interest income for income from financing. So, the cost of financing is two-fold. If you are shorting a bond, then you have two costs to deal with:

The financing cost, which is effectively an interest rate for borrowing the security.
The income cost of whatever that security produced. Since you borrow the bond, you are responsible for making that interest payment to the original owner!
To emphasize: the person who lent you the bond still is eligible to receive the interest, but they do not have current ownership of the bond. Instead, they have an “I.O.U.”: the short seller's promise to make good on the interest payments. As such, when you are shorting an investment, you must cover the lost income generated as well as a financing cost for the privilege of borrowing the bond.

For short sellers, it is very prudent to find bonds for which they believe the price will drop far enough to offset both the financing costs and income cost, as well as other transaction fees, and to ensure that a profit can still be earned. Doing so gives truth to the statement “sell high and buy low.”

Shorting is a remarkably interesting part of the market because it serves the purpose of preventing assets from getting overvalued. If there's consensus that a financial asset is overvalued, then short sellers come into the market and put downward pressure on that asset, helping it to achieve its natural equilibrium state. If there is no mechanism to short, then a market can become frozen. That means that sellers have prices that are too high, and there are no buyers willing to pay the prices.

Does this sound unrealistic? Think of commercial real estate. There are many properties throughout the world that remain vacant because property owners expect to receive an amount for them that exceeds what businesses are willing to pay for them. As a result, there is not a good consensus of what the price is. To put it in terms that we just learned, the offer price for commercial real estate often exceeds the bid price by such a large amount that properties stagnate. This means that property owners are looking for an offer price that is much greater than the prospective tenants are willing to pay. The offer price exceeds the bid price. There is no middle ground; they do not meet halfway. They simply do not come to terms. Consequently, the real estate remains vacant, often for years.

Shorting is a risky business because of the potential for unlimited loss. When you think about the fact that prices can jump up, there are potentially catastrophic losses to the short seller. We have been discussing bonds, but imagine you apply this to other asset classes for which there are no natural ceilings to the prices, like stocks or Bitcoin. During the global recession, there was a lack of confidence in the financial institutions themselves. It got to a point where so many investors were shorting the financial institutions that the government intervened and prohibited short selling of financials. This helped to restore some faith and trust in the financials and was part of a more comprehensive solution to avoiding a global depression. This was one of the actions that regulatory agencies suggested. In the next lesson, we will talk about these things first by focusing on central banks.

9. Short Squeezes
At this point we should be aware of the reasons behind short selling. Unlike what many non professional people believe, short selling is not just an attempt at manipulating the market. In fact, when speculators may sell short with the hope of realizing a profit on, say a stock that appears overvalued, this is not unlike what long investors do when they bet on the price of an asset to go up. The difference is that shor sellers expect the stock to go down in price while long investors expect the stock to go up in price, instead. Furthermore, there are also traders and fund managers who use short selling to offset certain risks in a long position or a portfolio. Finally, short sellers contribute to creating liquidity for trading.

However, short selling is not without risks, quite the opposite. The most feared of these risks is arguably a short squeeze.

To understand a short squeeze well, one has to be aware of at least the following three facts.

The short interest represents the number of shares that have been sold short and are still outstanding (i.e., not yet covered). When a trader borrows shares of a security from a broker and then sells those shares to some buyers, these shares are counted as short interest.
The number of shares that have been sold short is often expressed as a percentage on the public float and is an important element as it can signal market sentiment. In particular, an increase in the short interest may signal a bearish sentiment. A decrease, on the other hand, may tell investors that the market is overall becoming more bullish on a specific asset.
It is possible for short interest to be more than the entire public float of shares of a company. Some may wonder how this is possible. Well, we can explain this fact with an example
A short squeeze indicates a situation in which a stock is heavily sold short and then there is a rapid increase in the price of this stock. The reasons for this price incraese can vary and they could range from a sudden change in that company's fundamentals and/or the market simply realizing that there is an excess of short selling. When the price rises, short sellers rush to cover their positions by purchasing back the shares of that company. However, when the buying volume is very high compared to the typical market volume, it causes the price to go even higher and forces even more short sellers to try covering their short positions. In essence we are likely to see a cascade of stock purchases and bigger and bigger jumps in the share price.

How bad can it get? It can get pretty serious because it is possible that the short interest is bigger than the entire number of shares outstanding for that company and covering shorts can become very difficult or even impossible.

You may wonder: how is it even possible that the short interest is bigger than the the number of the company's available shares? Let's look at the next example which explains how this situation can occur.

Example. Let's assume that company ABC has 100 shares outstanding and that 50 of these shares are owned by a fund TTT who is willing to lend them to potential short sellers. Fund XYZ borrows the shares and shorts them. The shares are purchased by fund MNQ. Fund MNQ owns the shares and they can lend them to other investors as well. So say that they lend the whole 50 shares to Fund DEF. Now, fund DEF sells the 50 shares short which are acquired by Fund KHL that in turn lends them to Fund RST and Fund RST shorts them again. So let's do some math:

Shares of ABC outstanding and available to the public: 100;
Shares of ABC shorted overall: 50+50+50 = 150;
Hence, the short interest is 150% of the shares available.
In essence, it is the dynamic of lending and shorting that can produce very large short interests, larger thn the total number of shares publicly available. It may not be the typical case, but it is possible and it has happened.

As we wrote earlier, short squeeze takes place when short sellers, for a variety of reasons, rush to cover their short positions by purchasing large volumes of the stock in relation of the market value. When this happens, the stock price of the shorted stock rises further and this forces even more short sellers to rush to cover their short positions. If, in addition to the volume of shares changing hands is large compared to the typical daily volume, we are in a situation where the short interest is very large and even bigger than the number of public shares, the price jumps can become dramatic since there are not enough shares to buy to cover all short positions. And, to combine misery with misery, the cost of borrowing can increase and fast so that short sellers who are not able to cover their short positions, may be hit by heavy interest fees as well in addition to the stock moving against them and causing large losses.

This may sound theoretical, but it is not. There have been many notable short squeezes over time. From Piggly Wiggly in 1923 to the more recent cases of Vokswagen AG, Herbalife, AMC Entertainment Holdings Corp., Clover Health Investments Corp., Tesla, Alibaba Group Holding Limited, Gamestop Corp. and several others.

In recent times, one of the most egregious examples is arguably the one involving GameStop Corp. (ticker: GME). In the case of GME, the most dramatic events took place during the first quarter of 2021 and we provide a quick description immediately below to illustrate the facts that led to the squeeze.

Note: the prices mentioned below refer to the original prices during the early months of 2021 as events unfolded. Gamestop conducted a 4:1 stock split on July 22, 2022. Therefore, if you check the prices post the 2022 split, for example on Yahoo finance, they should be approximately 1/4 of those mentioned below.

On Juanuary 4, 2021 GME's stock closed at $17.25
On January 11, activist investors Ryan Cohen who owned over 10% of GME joined the board of directors together with other e-commerce specialists.
Investors interpret these appointments as a bullish sign and on January 13, the stock jumps at $38.65.
On January 19-20 Citron Research, a well known short seller tweeted that retail investors were "suckers at this poker game” and hinted that the stock would soon be back to around $20 per share But, the next day it cancelled a planned report amid harassment from those who had a bullish view of GME. It is at this point that the short interests stands at 140%.
On January 22, shares of GME trade at $65.01.
On January 25, Citadel announced that it has invested $2.75 billion in Melvin Capital, a hedge fund which is short a large amount of GME. GME trades at $76.79
On January 26 Elon Musk who tweets “Gamestonk!” and shares the link on Reddit's message board r/WallStreetBet used by many bullish retail investors to promote GME. That day the stock closes at $147.98
At this point we must not lose sight of the fact that short sellers were losing a lot of money and were trying to cover their short positions and one argues that they were doing so as fast as they could. This is the clear instance of the existence of a short squeeze and the stock on January 27 closes at $347.51, although it had reached $380 during that day.
On January 28, before the opening GME stock looks set to start trading at $500 per share. At this point several trading apps halt buying orders, but allows sell orders which made investors angry and prompts a suspicion of market manipulation. On that day GME closes at $193.60.
On Febraury 2, the US Treasury Secretary, requests a meeting of regulators to discuss the volatility created by the recent trading waves in GME. On that day GME stock closes at $90 per share.
On February 4, Robinhood removed trading restrictions on GME and other stocks in the same sector and GME stock closed at $53.50.
On February 18, a hearing is held by the House Financial Servies and Senate Banking Committees to discuss the GME situation. Stock falls to $50.31.
On February 19 GME falls to $40.59.
On March 12, GME stock is back to $264.52.
The ups and downs movements continued after March 2021 and till the end of 2023, but the movements were not as dramatic and drastic as those in the first quarter of 2021.

To appreciate in full what happened in that first quarter of 2021 it is worth recalling that, during January 28, 2021 alone, short seller Melvin Capital that heavily shorted GME had lost 30% of its value since the start of the month. Its losses later reached 53% of its investments on only one position. Another big short seller like D1 Capital Partners lost 20% of its capital or about $4 billion during roughly the same period.

These events should serve as a reminder that selling short is a tough and risky business.

Figure 3. Adjusted closing prices and volumes for GME shares during the short squeeze of 2021. The largest price movements took place in the first quarter of 2021.

GME_ClosingPrices.pngFM_M1_L3_GME_Volume.png

10. Conclusion
In this lesson, we examined the process of discounting and introduced the relationship between bond prices and interest rates. We saw that higher interest rates mean lower prices. We then examined the buy-side and sell-side types of financial institutions, and the idea of bid prices and offer prices to reflect a two-sided market. We concluded by showing the procedure and strategy of shorting. In the next lesson, we'll round out our discussion of the financial landscape by outlining the types of banks in the financial industry.

