#include <iostream>

using namespace std;

int main()
{
    int rowCount;
    cout << "Enter Number Of Row: ";
    cin >> rowCount;

    for (int row = 0; row < rowCount; row++)
    {
        for (int col = 0; col < rowCount - row - 1; col++)
        {
            cout << " ";
        }

        for (int col = 0; col < 2 * row + 1; col++)
        {
            if (col == 0)
            {
                cout << "*";
            }
            else if (col == 2 * row)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }

    for (int row = 0; row < rowCount; row++)
    {
        for (int col = 0; col < row; col++)
        {
            cout << " ";
        }

        for (int col = 0; col < 2 * rowCount - 2 * row - 1; col++)
        {
            if (col == 0 || col == 2 * rowCount - 2 * row - 2)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
}