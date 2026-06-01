"use client";

import { SwapCard } from "@/components/swap/SwapCard";

/**
 * Home/Swap page with deep-linking support
 * 
 * Deep-link parameters:
 * - base: Token to sell (e.g., ?base=XLM)
 * - quote: Token to buy (e.g., &quote=USDC)
 * - amount: Amount to sell (e.g., &amount=100.5)
 * - type: Trade direction "sell" or "buy" (default: sell)
 * 
 * Example: /?base=XLM&quote=USDC&amount=100&type=sell
 */
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 bg-background">
      <div className="w-full max-w-xl mx-auto space-y-6 pt-12 md:pt-20">
        <div className="text-center space-y-2 mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            StellarRoute Exchange
          </h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Multi-hop smart asset router offering optimized settlement paths across liquidity nodes.
          </p>
        </div>

        <SwapCard />
      </div>
    </main>
  );
}