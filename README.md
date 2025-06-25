# Financial Analysis Agent Hackathon

This repository contains the code and resources for the "Financial Analysis Agent" project, which was built as part of a hackathon. The project utilizes `n8n` workflows as the core technology for automating and analyzing financial data.

## Project Overview

The project consists of the following key components:

- **n8n Workflow**: The main workflow file, `AudithonX_round1.json`, orchestrates the different nodes and integrations needed for the analysis.
- **Classifier (T1, T2)**: This JavaScript code, found in `Classifier_T1_T2.js`, classifies the questions into two types (Type#1 and Type#2) based on the content of the input query.
- **Map Category for Hint**: The file `Map_Category_for_hint.js` includes a dictionary that maps financial analysis topics to their respective categories and provides hints for further analysis.

## Workflow Overview
The n8n workflow (AudithonX_round1.json) orchestrates the automation process and includes the following steps:

1. Trigger Workflow
When Clicking 'Execute Workflow': The workflow is triggered by a user action to start the process.

2. File Retrieval and Extraction
Google Drive (Download File): Downloads the financial file (CSV format) from Google Drive.

Extract from File (CSV): Parses the data from the CSV file for further processing.

3. Data Processing and Classification
Loop Over Items: Iterates over each entry from the extracted CSV file to process them individually.

Convert to File (CSV): Converts the processed data back into CSV format.

Classifier (T1, T2): Classifies financial queries into two types:

T1 (Multiple-Choice): Handles questions that require choosing one or more correct answers.

T2 (Rise or Fall Predictions): Analyzes queries that predict financial trends, such as stock market rise or fall.

4. Categorization and Hint Mapping
Map Category for Hint: Uses a predefined dictionary to map financial categories to relevant hints, aiding in structured problem-solving.

5. Prediction and Answering
T1 Answerer: Responds to T1-type questions, possibly interacting with an AI model to provide correct answers.

T2 Prediction: Provides predictions related to T2-type questions, such as forecasting trends in the financial market.

6. Model Interaction
Olama Chat Model: An external model used for refining predictions and providing insights based on the categorized data.

7. Manual Editing
Edit Fields (Manual): Allows users to manually adjust specific fields or outputs if necessary.

8. Final Output
Replace Me: Replaces or updates the relevant data before final output, ensuring accurate and up-to-date results.

## Files in the Repository

1. **`AudithonX_round1.json`**:
   - This is the n8n workflow file containing the automation steps for processing financial data.
2. **`Classifier_T1_T2.js`**:
   - A JavaScript file that classifies financial questions into Type#1 and Type#2 based on keywords.
   - Type#1 handles multiple choice questions, while Type#2 focuses on rise or fall predictions.
3. **`Map_Category_for_hint.js`**:

   - A JavaScript file containing a dictionary to map financial categories to their respective hints for structured problem-solving.

4. **`n8n_workflow.png`**:
   - An image file illustrating the workflow diagram for easy visualization of the n8n process.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/financial-analysis-agent.git
   cd financial-analysis-agent

   ```

2. Set up n8n by following [n8n documentation](https://docs.n8n.io/).

3. Import the AudithonX_round1.json workflow into your n8n instance.

4. Review the JavaScript files (Classifier_T1_T2.js and Map_Category_for_hint.js) for further customizations and integrations.

## License

This project is licensed under the MIT License.

## Acknowledgments

Thanks to the n8n team for providing a powerful automation platform.

Special mention to the hackathon organizers for their support and feedback.
