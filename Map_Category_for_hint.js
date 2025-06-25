function main() {
    // Dictionary mapping categoryCode to category and hint
    const categoryDict = {
        "Economics": {
            category: "Economic Analysis and Market Forces",
            hint: `mermaid
graph TD;
A[Step 1: Question Breakdown] -->|Extract key terms| A1{Identify Topic}
A1 -->|Micro: Supply & Demand, Market Structures| A2
A1 -->|Macro: GDP, Growth, Policy, Trade| A3
A1 -->|Currency & Regulation| A4
A2 --> B1[Identify model: Elasticity, Cost Curves, Shutdown Points]
A3 --> B2[Map to AD-AS, Business Cycles, Growth Theories]
A4 --> B3[Assess Exchange Rates, Trade, Capital Flows, Regulation]
B1 -->|Check for formula or concept?| C{Numerical or Conceptual}
B2 --> C
B3 --> C
C -->|Numerical| D1[Extract data, apply formulas, check assumptions]
C -->|Conceptual| D2[Analyze cause-effect, policy impact]
D1 --> E[Step 4: Solution Development]
D2 --> E
E -->|Construct structured response| E1(Core insight + economic rationale)
E -->|Consider alternative scenarios| E2(Assess different possibilities)
E1 --> F[Step 5: Answer Validation]
E2 --> F
F -->|Check logic, principles, and assumptions| F1(Verify consistency)
F1 -->|Ensure completeness & clarity| F2(Confirm answer structure)`
        },
        "FixedIncome": {
            category: "Fixed Income Investments",
            hint: `mermaid
graph TD
A[Purpose and Scope] --> B3[Analyze Macro Conditions]
B --> C[Assess Bond Features]
C --> D[Risk and Yield Analysis]
D --> E[Develop Recommendations]
E --> F[Review Performance]
%% Notes and detailed steps
A --> |Set objectives| B
B --> |Review interest rates and inflation| C
C --> |Focus on duration, spread| D
D --> |Assess scenarios| E`
        },
        "QuantMeth": {
            category: "Quantitative Methods",
            hint: `mermaid
graph TD
A["Articulating Purpose and Context"] --> B["Collecting Input Data"]
B --> C["Processing and Cleaning Data"]
C --> D["Selecting Quantitative Models and Tools"]
D --> E["Estimating Parameters and Testing Hypotheses"]
E --> F["Interpreting Results and Communicating Findings"]
F --> G["Monitoring and Model Reassessment"]`
        },
        "EquityInvest": {
            category: "Equity Investments",
            hint: `mermaid
graph TD
A[Objective Setting] --> B[Market and Sector Insights]
B --> C[Industry Competitive Analysis]
C --> D[Company Review]
D --> E[Valuation and Risks]
E --> F[Investment Decision]
%% Step-specific highlights
B --> |Look at growth patterns| C
C --> |Evaluate competitors' positions| D
D --> |Check financial health| E
E --> |Combine insights into strategy| F`
        },
        "PortManage": {
            category: "Portfolio Management",
            hint: `mermaid
graph TD
A["Define Investment Objectives"] --> B["Establish Investment Constraints"]
B --> C["Develop Strategic Asset Allocation"]
C --> D["Incorporate Tactical Adjustments"]
D --> E["Select and Optimize Securities"]
E --> F["Execute Implementation and Trading"]
F --> G["Measure Performance and Attribution"]
G --> H["Monitor Risk and Compliance"]
H --> I["Rebalance and Adjust Portfolio"]`
        },
        "Derivatives": {
            category: "Derivative Instruments",
            hint: `mermaid
graph TD
A[Define Objective and Context] --> B[Identify Derivative Instrument]
B --> C[Understand Contract Specifications]
C --> D[Gather Market Data]
D --> E[Apply Valuation Models]
E --> F[Assess Risks: Market, Counterparty, etc.]
F --> G[Construct Payoff Diagrams or Strategies]
G --> H[Interpret Results and Make Recommendations]
H --> I[Review, Monitor, and Adjust Strategies]
%% Example labels or notes (optional)
A --> |Hedging, speculation, arbitrage| B
C --> |Features like notional amount, expiration| D
D --> |Market prices, volatility, risk-free rates| E
F --> |Sensitivity to Greeks: Delta, Gamma, Vega, etc.| G
H --> |Adjust based on changing market conditions| I`
        },
        "FinancialReporting": {
            category: "Financial Reporting and Analysis",
            hint: `mermaid
graph TD
A[Articulating Purpose and Context] --> B[Collecting Input Data]
B --> C[Processing Data]
C --> D[Analyzing and Interpreting Processed Data]
D --> E[Developing and Communicating Conclusions]
E --> F[Doing Follow-Up]
A --> |Defines goals, tools, and audience| B
B --> |Gather data on economy and industry| C
C --> |Use tools like ratios and charts| D
D --> |Interpret data for conclusions| E
F --> |Periodic review and iteration| A`
        },
        "AlterInvest": {
            category: "Alternative Investments",
            hint: `mermaid
graph TD
A["Define Investment Objectives and Mandate"] --> B["Identify Alternative Asset Classes"]
B --> C["Conduct Manager and Strategy Due Diligence"]
C --> D["Perform Valuation and Pricing Analysis"]
D --> E["Assess Risk and Liquidity"]
E --> F["Allocate Alternatives in Portfolio"]
F --> G["Monitor Performance and Rebalance"]`
        },
        "CorpIssuers": {
            category: "Corporate Finance and Issuers",
            hint: `mermaid
graph TD
A["Corporate Issuer Overview"] --> B["Industry Classification"]
B --> C["Sector Trends and Competitive Landscape"]
A --> D["Financial Statement Analysis"]
D --> E["Profitability, Liquidity, Leverage"]
A --> F["Credit Risk Assessment"]
F --> G["Rating Agencies and Default Probabilities"]
A --> H["Capital Structure and Issuance History"]
H --> I["Bond Issuances and Debt Maturities"]
A --> J["Corporate Governance and Management"]
J --> K["Board Quality and Managerial Competence"]
A --> L["Valuation and Investment Analysis"]
L --> M["DCF, Relative Valuation, Multiples"]`
        },
        "Ethics": {
            category: "Ethical and Professional Standards",
            hint: `mermaid
graph TD
A[Step 1: Scenario Breakdown] --> B{Identify Ethical Domain}
B --> B1[Professionalism & Integrity]
B --> B2[Duties to Clients]
B --> B3[Duties to Employers]
B --> B4[Conflicts of Interest]
B --> B5[Investment Process & Duties]
B --> B6[Responsibilities as CFA Member]

B1 --> C[Check for Code & Standards Violations]
B2 --> C
B3 --> C
B4 --> C
B5 --> C
B6 --> C

C --> D{Nature of Issue}
D --> D1[Misrepresentation, Misconduct, Confidentiality]
D --> D2[Fair Dealing, Suitability, Loyalty]
D --> D3[Compliance, Independence, Oversight]

D --> E[Step 2: Ethical Reasoning]
E --> F1[Apply relevant Standard of Conduct]
E --> F2[Identify stakeholders and impact]
E --> F3[Consider long-term reputation and fiduciary duties]

F1 --> G[Step 3: Evaluate Options]
F2 --> G
F3 --> G

G --> H1[Prioritize ethical action over business gain]
G --> H2[Select most conservative, integrity-preserving action]

H1 --> I[Step 4: Final Answer Validation]
H2 --> I

I --> J1[Check consistency with CFA standards]
I --> J2[Ensure action protects client, market, and integrity]
`
        }
    };

    // Get input items
    const allItems = items; // n8n JavaScript Code node uses 'items'

    // Process the single input item
    if (allItems.length === 0) {
        return [{ json: { categoryCode: '', category: '', hint: 'error:no_input' } }];
    }

    // Assume single input as per request
    const item = allItems[0];
    const categoryCode = item.json.output || '';

    // Look up category and hint in dictionary
    const entry = categoryDict[categoryCode] || { category: 'Unknown', hint: 'error:category_not_found' };
    const category = entry.category;
    const hint = entry.hint;

    // Return single item with categoryCode, category, and hint
    return [{ json: { categoryCode, category, hint } }];
}

return main();