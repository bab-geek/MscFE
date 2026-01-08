# Lesson 3: Buying and Selling Short — Practice Questions & Solutions

**Purpose**: Deepen understanding through applied bond pricing + market microstructure + shorting scenarios  
**Difficulty**: Beginner (★), Intermediate (★★), Advanced (★★★)

---

## Section 1 — Discounting & Present Value

### Q1.1 (★) Single cash flow PV
You will receive **$10,000** in **3 years**. Discount rate is **5%** (annual compounding). What is the present value?

**Solution**
```
PV = 10,000 / (1.05)^3 = 10,000 / 1.157625 = 8,638.38
```

**Answer**: **$8,638.38**

---

### Q1.2 (★★) Multiple cash flows PV
Discount rate is **6%**. What is the PV of receiving:
- $1,000 in 1 year
- $1,000 in 2 years
- $1,000 in 3 years

**Solution**
```
PV = 1000/1.06 + 1000/(1.06)^2 + 1000/(1.06)^3
   = 943.40 + 890.00 + 839.62
   = 2,673.02
```

**Answer**: **$2,673.02**

---

## Section 2 — Bond Pricing (Annual Coupons)

### Q2.1 (★) Coupon cash flow schedule
A bond has face value **$1,000**, coupon rate **4%**, annual coupons, maturity **3 years**.
- List the cash flows by year.

**Solution / Answer**
- Year 1: $40  
- Year 2: $40  
- Year 3: $40 + $1,000 = $1,040

---

### Q2.2 (★★) Price a bond (annual coupons)
Face value `F = 1,000`, coupon rate `c = 4%`, maturity `n = 3`, market yield `y = 5%`. Price the bond.

**Solution**
```
P = 40/1.05 + 40/(1.05)^2 + 1040/(1.05)^3
  = 38.0952 + 36.2812 + 898.1490
  = 972.5254
```

**Answer**: **$972.53** (below par because coupon < yield)

---

### Q2.3 (★★) Par / premium / discount reasoning
Same bond as Q2.2, but now `y = 4%`. What is the price relative to par and why?

**Solution**
If `y = c`, the bond trades at par (in an idealized setting).

**Answer**: **At/near $1,000 (par)** because **coupon rate equals discount rate**.

---

## Section 3 — YTM (Implied Yield to Maturity)

### Q3.1 (★★) Interpret YTM
In one sentence: what does YTM represent?

**Answer**
**The single discount rate that makes the PV of a bond’s promised cash flows equal its current market price (assuming hold-to-maturity and no default).**

---

### Q3.2 (★★★) Solve an implied YTM (by trial)
Bond: `F = 1,000`, `c = 4%` annual, `n = 4`. Market price is **$950**.
Use trial (or a quick spreadsheet) to approximate `y` to 2 decimals.

**Solution (trial)**
We solve:
```
950 = 40/(1+y) + 40/(1+y)^2 + 40/(1+y)^3 + 1040/(1+y)^4
```
Try `y = 5%`:
```
P(5%) = 40/1.05 + 40/1.05^2 + 40/1.05^3 + 1040/1.05^4
      = 38.095 + 36.281 + 34.554 + 855.745
      = 964.675
```
Price too high → yield must be higher.

Try `y = 5.5%`:
```
P(5.5%) = 40/1.055 + 40/1.055^2 + 40/1.055^3 + 1040/1.055^4
        = 37.915 + 35.939 + 34.070 + 838.000
        = 945.924
```
Now too low → yield is slightly lower than 5.5%.

Interpolate between 5.0% (964.675) and 5.5% (945.924):
- Need to drop from 964.675 to 950: drop 14.675
- Total drop across interval: 18.751
- Fraction: 14.675 / 18.751 ≈ 0.7827
- Yield ≈ 5.0% + 0.7827 * 0.5% ≈ 5.39%

**Answer**: **~5.39%** (close to the lesson’s 5.424% depending on rounding)

---

## Section 4 — Semi-Annual Coupon Pricing

### Q4.1 (★★) Price a semi-annual coupon bond
Face value `F = 1,000`, annual coupon rate `c = 6%`, maturity `n = 2 years`, yield `y = 5%`, coupons paid semi-annually.

**Solution**
Semiannual coupon = `F * (c/2) = 1,000 * 0.03 = 30`  
Number of periods = `2n = 4`  
Periodic yield = `y/2 = 0.025`

```
P = 30/1.025 + 30/1.025^2 + 30/1.025^3 + 1030/1.025^4
  = 29.268 + 28.556 + 27.859 + 934.573
  = 1,020.256
```

**Answer**: **$1,020.26** (premium because coupon > yield)

---

## Section 5 — Credit Risk & Spreads (Conceptual)

### Q5.1 (★★) Why do corporates yield more?
Two 2-year bonds:
- U.S. Treasury yields 3%
- Company XYZ yields 4%
Why might XYZ have a higher yield?

**Answer**
Because XYZ has **credit risk** (non-zero default probability), investors demand an **extra yield (credit spread)** as compensation.

---

## Section 6 — Buy-side, Sell-side, Bid/Ask

### Q6.1 (★) Define bid and ask
Define **bid** and **ask** in one sentence each.

**Answer**
- **Bid**: price at which a dealer is willing to **buy**.
- **Ask**: price at which a dealer is willing to **sell**.

---

### Q6.2 (★★) Compute the spread cost
A dealer quotes:
- Bid = $100.50
- Ask = $101.00

a) What is the bid-ask spread?  
b) If you buy at ask and immediately sell at bid, what is your loss per bond?

**Solution**
a) Spread = 101.00 − 100.50 = 0.50  
b) Buy 101.00, sell 100.50 → loss = 0.50

**Answer**
a) **$0.50**  
b) **$0.50 per bond** (ignoring other fees)

---

## Section 7 — Shorting Mechanics & P&L

### Q7.1 (★★) Basic short P&L (no borrow fee)
You short 200 shares at $50 and cover at $44. What is gross profit?

**Solution**
```
Profit = (50 - 44) * 200 = 6 * 200 = 1,200
```

**Answer**: **$1,200**

---

### Q7.2 (★★★) Short with borrow fee
You short 200 shares at $50 and cover at $44 after **6 months**. Borrow fee is **8% annual** on the value of the borrowed shares (assume simple interest for borrow cost). Ignore interest earned on short-sale proceeds.

Compute net profit.

**Solution**
Gross trading profit:
```
(50 - 44) * 200 = 1,200
```
Borrowed value (approx based on initial short notional):
```
Notional = 50 * 200 = 10,000
Borrow cost = 10,000 * 0.08 * 0.5 = 400
```
Net:
```
1,200 - 400 = 800
```

**Answer**: **$800** net profit

---

### Q7.3 (★★★) Bond short: financing + coupon replacement
You short **$100,000 face** of a bond at **102** (price per 100 of par). The bond pays an **annual coupon of 6%**, and you cover at **99** after **6 months**.
Borrow/financing rate is **4% annual** on the market value of the borrowed bond (assume simple interest).

Compute approximate net P&L (ignore transaction fees; assume coupon accrues linearly and one coupon payment occurs at the 6-month mark).

**Solution**
1) Short-sale proceeds (sell high):
```
Proceeds = 102% * 100,000 = 102,000
```
2) Cost to cover (buy back):
```
Cover cost = 99% * 100,000 = 99,000
```
3) Price P&L:
```
Price P&L = 102,000 - 99,000 = 3,000
```
4) Coupon replacement cost (you owe coupon to lender):
Annual coupon = 6% of 100,000 = 6,000  
At 6 months, coupon paid is typically half-year: 3,000
```
Coupon cost = 3,000
```
5) Financing cost (borrow fee on market value; approximate with initial notional):
```
Financing cost = 102,000 * 0.04 * 0.5 = 2,040
```
6) Net:
```
Net P&L = 3,000 - 3,000 - 2,040 = -2,040
```

**Answer**: **≈ -$2,040** (the price drop wasn’t enough to cover coupon + financing)

---

## Section 8 — Short Interest & Short Squeezes

### Q8.1 (★★) How can short interest exceed 100%?
Explain (briefly) how short interest can exceed 100% of float.

**Answer**
Through a lending chain: one holder lends shares → short seller sells → buyer can lend those same shares again → another short seller shorts again, etc., so the same shares support multiple short positions.

---

### Q8.2 (★★★) Compute short interest percentage (toy model)
Company has 100 shares outstanding (assume float = 100).  
50 shares are lent and shorted, sold to a buyer who lends them again and they are shorted again, then repeated one more time (3 short cycles total).

a) Total shares shorted  
b) Short interest as % of float

**Solution**
a) 50 + 50 + 50 = 150  
b) 150 / 100 = 150%

**Answer**
a) **150 shares**  
b) **150%**

---

## Quick Drill (answers only)

1) PV of $5,000 in 2 years at 7%: **$4,366.01**  
2) Bond price: F=1,000, c=5%, n=2, y=5%: **$1,000**  
3) Bid/Ask 99.8 / 100.2 spread: **0.4**  
4) Short 100 shares: sell 30, cover 35 → gross P&L: **-$500**


