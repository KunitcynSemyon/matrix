import eel
import numpy as np

# Set web files folder and optionally specify which file types to check for eel.expose()
#   *Default allowed_extensions are: ['.js', '.html', '.txt', '.htm', '.xhtml']
eel.init('web', allowed_extensions=['.js', '.html'])

@eel.expose
def get(matrix, vector):
	matrix = [[float(itemInner) for itemInner in itemOuter] for itemOuter in matrix]
	A = np.array(matrix, dtype = 'float')
	B = np.array(vector, dtype = 'float')

	L = np.linalg.cholesky(A)
	LT = L.transpose()

	Y = np.linalg.solve(L, B)
	X = np.linalg.solve(LT,Y).tolist()
	Ylist = Y.tolist()
	
	return X,Ylist

@eel.expose
def method_sqrt(matrix, vector):
	matrix = [[float(itemInner) for itemInner in itemOuter] for itemOuter in matrix]
	A = np.array(matrix, dtype = 'float')
	B = np.array(vector, dtype = 'float')

	print(A)
	print(B)

eel.start('main.html', size = (500, 500))