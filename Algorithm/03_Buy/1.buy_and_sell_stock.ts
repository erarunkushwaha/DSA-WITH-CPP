
/***
 * 121. Best Time to Buy and Sell Stock
Easy

Topics
premium lock icon
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.



 */ 

// brute force

/**
 * 
function maxProfit(prices: number[]): number {

    let minBuy = prices[0];
    let maxSale = 0;
    let ans = 0;

    for(let i =0; i< prices.length; i++){
        // for buying
        minBuy = prices[i]

        // for selling
        for(let j = i + 1; j< prices.length; j++){
            maxSale = prices[j];
            if(maxSale > minBuy ){
                // sell when price is greather than buying price
                const sell = maxSale -minBuy;

            // store ans with max value
                ans = Math.max(sell,ans)
                
            }
        }

    }
    
    return ans;
};
 */

// optmised


function maxProfit(prices: number[]): number {
    let minBuy = prices[0];
    let maxSell = 0;
    let ans = 0;

  for(let i =1; i<prices.length; i ++){

    maxSell = prices[i];
    if(maxSell > minBuy){
        console.log("minbuy::",minBuy, "maxsell", maxSell, "profilt::",maxSell - minBuy)
        ans = Math.max(ans, maxSell - minBuy);
    }
    minBuy = Math.min(minBuy,prices[i])

  }

    return ans;
}

const res = maxProfit( [7,1,5,3,6,4]);

console.log("res::",res);


export {}; // 👈