#include <iostream>

using namespace std;

/***
 * print this
                        * * * * * * * * * * 
                        * * * * * * * * *
                        * * * * * * * *
                        * * * * * * *
                        * * * * * *
                        * * * * *
                        * * * *
                        * * *
                        * *
                        *
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
            cout << "* ";
        }
        cout<<endl;
    }

}