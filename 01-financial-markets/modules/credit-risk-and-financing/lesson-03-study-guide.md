# Lesson 3: Buying and Selling Short — Study Guide

**Reading Time**: 150 minutes  
**Prior Knowledge**: Interest, Interest Rates, Term to Maturity, Bond Basics  
**Keywords**: Discounting, Credit Risk, Buy-Side, Sell-Side, Shorting, Financing, Bid-Ask Spread, YTM

---

## 1) Bond Pricing via Discounting Cash Flows

### Core idea
A bond is a **bundle of future cash flows** (coupons + principal).  
To price it today, you **discount each cash flow back to time 0** and sum the present values.

### Discount factor
If the (annual) discount rate is \(r\) and the cash flow happens in \(t\) years, the discount factor is:

```
DF(t) = 1 / (1 + r)^t
```

So a cash flow \(CF_t\) received at time \(t\) has present value:

```
PV(CF_t) = CF_t / (1 + r)^t
```

---

## 2) Actual Pricing of a Bond (Annual Coupons)

### Bond cash flows (annual coupon)
Let:
- `F` = face value (par / principal)
- `c` = annual coupon rate
- `n` = years to maturity
- `y` = prevailing annual discount rate (market yield used for discounting)

Annual coupon cash flow:

```
Coupon = F * c
```

Price is the PV of all coupons plus PV of principal:

```
Price = Σ_{t=1..n} (F*c)/(1 + y)^t  +  F/(1 + y)^n
```

### Par / premium / discount intuition
- If `c = y` → **Price = F** (trades at **par**)
- If `c < y` → **Price < F** (trades **below par**, “discount bond”)
- If `c > y` → **Price > F** (trades **above par**, “premium bond”)

Key relationship:
**Higher interest rates → lower bond prices** (inverse price–yield relationship).

---

## 3) Implied Yield to Maturity (YTM)

### What YTM means
**YTM** is the single interest rate \(y\) that makes the **discounted value of the bond’s promised cash flows** equal to its **current market price**, assuming:
- you hold the bond to maturity, and
- the bond does not default.

### YTM equation (annual coupons)
If the market price is `P`, solve for `y` in:

```
P = Σ_{t=1..n} (F*c)/(1 + y)^t  +  F/(1 + y)^n
```

This equation is **non-linear** in `y`, so you typically solve it via:
- a spreadsheet (Goal Seek), or
- numerical root finding.

---

## 4) Semi-Annual Coupon Bonds (common in the U.S.)

If coupons are paid **twice per year**:
- number of coupon payments = `2n`
- periodic discount rate = `y/2`
- periodic coupon rate = `c/2`

Price formula:

```
P = Σ_{k=1..2n} (F*(c/2)) / (1 + y/2)^k  +  F/(1 + y/2)^(2n)
```

---

## 5) Term Structure / Changing Discount Rates (general bond pricing)

In reality, the discount rate used to discount each cash flow can vary by maturity (a **yield curve / term structure**).

General idea:
- discount the cash flow at time `t` using the **appropriate rate for that maturity**.

A common way is to use **zero-coupon (spot) rates** \(r_t\) to build discount factors:

```
DF(t) = 1 / (1 + r_t)^t
P = Σ CF_t * DF(t)
```

---

## 6) Zero-Coupon Bonds (“Zeros”)

### Definition
A **zero-coupon bond** pays **no coupons**; you buy it at a discount and receive face value at maturity.

### Yield of a zero
If price is `P0`, face value is `F`, maturity is `t`:

```
P0 = F / (1 + y)^t
y = (F / P0)^(1/t) - 1
```

**Note**: zeros can carry **credit risk** (issuer can default before paying anything).

---

## 7) Credit Risk and Bond Yields (risk-free vs risky)

### Bond buyer = lender
When you buy a bond, you give cash up front and expect:
- coupons, and
- principal at maturity.

So credit risk is borne by the **bondholder**.

### Risk-free rate intuition
Government bonds (for strong sovereigns) are often treated as **default-free** for modeling.
Their yields are often used as **risk-free rates**.

### Why corporate yields are higher
A corporate issuer generally has a non-zero probability of default → investors demand **extra yield** (credit spread) as compensation.

---

## 8) Buy-Side vs Sell-Side

### Buy-side (managing other people’s money)
Institutions that invest on behalf of clients (pensions, funds, etc.):
- collect funds,
- invest according to risk tolerance and mandate,
- earn management fees (and sometimes performance fees).

### Sell-side (market-making / intermediation)
Institutions (e.g., investment banks) that:
- provide liquidity,
- quote two-sided markets (buy and sell),
- make money via spreads and transaction economics.

Key point: buy-side **buys and sells**, but “buy-side” refers to **who they represent** (clients), not a one-way action.

---

## 9) Bid-Ask Spread

### Definitions
- **Bid**: the price at which a dealer is willing to **buy**.
- **Ask/Offer**: the price at which a dealer is willing to **sell**.
- **Bid-ask spread** = ask − bid.

### Why it exists
Market-makers provide immediacy and liquidity; the spread helps cover:
- inventory risk,
- operational costs,
- adverse selection,
- profits.

Real-world analogy: airport FX kiosk buying currency cheap and selling it expensive.

---

## 10) Shorting (Selling What You Don’t Own)

### Core mechanics
Shorting is “sell high, then buy low”:
1. **Borrow** the security.
2. **Sell** it in the market.
3. **Pay borrow fee** (financing cost) while short is open.
4. **Buy back** later (cover).
5. **Return** the borrowed security.

### Margin & collateral (intuition)
Shorting typically requires a **margin account**:
- you must post collateral,
- broker may issue a margin call if the price rises,
- broker can force-close the position.

### Total short P&L intuition
Ignoring coupons/dividends for a moment:

```
P&L ≈ (Sell price - Buy-to-cover price) * shares  -  Borrow cost  -  Fees
```

For bonds/stocks that pay income while you’re short:
- you often must compensate the lender for those payments (e.g., coupons/dividends).

---

## 11) Financing Short Positions (two costs)

If you short an income-producing security (like a bond), you typically face:
1. **Borrow/financing cost** (fee/interest for borrowing the security)
2. **Income replacement cost** (you owe the coupon/dividend to the lender)

Shorting only makes sense if the expected price drop is large enough to cover:
borrow costs + income replacement + transaction costs.

---

## 12) Short Squeezes

### What it is
A **short squeeze** occurs when:
- a stock is heavily shorted, and
- price rises quickly,
forcing short sellers to buy to cover, which increases demand and can push price even higher (feedback loop).

### Short interest & float
- **Short interest**: shares sold short and not yet covered.
- Often expressed as % of **public float** (shares available for trading).

Short interest can exceed 100% of float due to rehypothecation/lending chains (share is lent, sold, bought, lent again, etc.).

### Key risk
Shorting can have **unlimited losses** (price can rise without bound), especially during squeezes.

---

## Key Takeaways

1. **Bond price = PV of cash flows**.
2. **Price–yield relationship is inverse**: yields up → prices down.
3. **YTM** is the implied discount rate that matches the market price; it often requires numerical solving.
4. **Semi-annual coupons** change the pricing formula via “divide rates by 2, double payment count”.
5. **Credit risk** creates yield spreads over risk-free rates.
6. **Sell-side** provides liquidity via **bid/ask**; spread is compensation for market-making.
7. **Shorting** is a borrow–sell–buyback–return lifecycle with financing + income replacement costs.
8. **Short squeezes** are real and can be violent when short interest is high.

---

## Formula Summary (High Signal)

### Discount factor
```
DF(t) = 1 / (1 + r)^t
```

### Bond price (annual coupons)
```
P = Σ_{t=1..n} (F*c)/(1 + y)^t  +  F/(1 + y)^n
```

### Bond price (semi-annual coupons)
```
P = Σ_{k=1..2n} (F*(c/2))/(1 + y/2)^k  +  F/(1 + y/2)^(2n)
```

### Zero-coupon yield
```
y = (F / P0)^(1/t) - 1
```
