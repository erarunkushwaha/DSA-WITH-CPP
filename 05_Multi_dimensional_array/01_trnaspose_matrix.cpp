#include <iostream>
using namespace std;

void transposeArray(int arr[][3], int row, int col, int transposedArr[][3])
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            transposedArr[j][i] = arr[i][j];
        }
    }

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            cout << transposedArr[i][j];
        }
        cout << endl;
    }
}

int main()
{

    int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int row = 3;
    int col = 3;
    int transposedArr[3][3];

    transposeArray(arr, row, col, transposedArr);

    return 0;
}