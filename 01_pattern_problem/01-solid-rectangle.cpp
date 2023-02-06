#include <iostream>

using namespace std;

int main()
{
   int row, col;
   cout<<"Enter Number Of Row: ";
   cin>>row;
   cout<<"Enter Number Of column: 5";
   cin>>col;

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            cout << "* ";
        }
        cout<<endl;
    }
}