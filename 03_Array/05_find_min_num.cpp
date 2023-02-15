#include <iostream>
#include <limits.h>

using namespace std;

// linear search

int main()
{
    int arr[] = {1, 0, 3, -1, 6, 8, 5, 15, 57, 58};
    int size = 10;

    int minNumber = INT_MAX;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] < minNumber)
        {
            minNumber = arr[i];
        }
    }

    cout << "Minimun Number :: " << minNumber << endl;
}