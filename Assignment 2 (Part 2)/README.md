Task: Use pycaret for low-code end-to-end ML projects
There are 5 simple steps in the pycaret workflow:
	1)Setup: Preprocessing and loading the dataset. 
	2)Create model/Compare Models: Create a specific model or compare all the models applicable for the problem type 
	and pick the best one.
	3)Analyze Models: Analyzing the model through visual plots.
	4)Prediction: Applying the model on the test set.
	5)Saving Models: Saving the pipeline and weights of the tuned model in the form of a pkl file.
Used pycaret to solve various problems:
Problem				Dataset			ipynb file	
Binary Classification		heart.csv		pycaret_BinaryClassification.ipynb
Multiclass Classification	drug200.csv		pycaret_MulticlassClassification.ipynb
Clustering			clustering.csv		pycaret_clustering.ipynb
Regression			Crab_Age.csv		pycaret_regression.ipynb
Anomaly Detection		anomaly_dataset.csv	pycaret_Anomaly.ipynb
Time Series (No Exogenous)	Time_series_wo.csv	pycaret_Timeserieswo.ipynb
Time Series ( Exogenous)	Time_series_we.csv	pycaret_Timeserieswe.ipynb
