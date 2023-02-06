#include <iostream>

using namespace std;

/***
 * print this
                        1 2 3 4 5 6 7 8 9 10 
                        1 2 3 4 5 6 7 8 9
                        1 2 3 4 5 6 7 8
                        1 2 3 4 5 6 7
                        1 2 3 4 5 6
                        1 2 3 4 5
                        1 2 3 4
                        1 2 3
                        1 2
                        1
 * 
*/

int main(){
    int rowCount;
   cout<<"Enter Number Of Row: ";
   cin>>rowCount;


    for (int row = 0; row < rowCount; row++)
    {
        for (int col = 0; col < rowCount - row; col++)
        {
            cout << col + 1 << " ";
        }
        cout<<endl;
    }

}