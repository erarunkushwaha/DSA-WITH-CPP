#include <iostream>

using namespace std;

int main()
{
    int rowCount;
    cout << "Enter Number Of Row: ";
    cin >> rowCount;

    // print full pyramid
    for (int row = 0; row < rowCount; row++)
    {
        for (int col = 0; col < rowCount - row - 1; col++)
        {
            cout << " ";
        }

        for (int col = 0; col < row + 1; col++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    // print inverted half pyramid
    for (int row = 0; row < rowCount; row++)
    {
        for (int col = 0; col < row + 1; col++)
        {
            cout << " ";
        }

        for (int col = 0; col < rowCount - row - 1; col++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}