#include <iostream>

using namespace std;

/***
 * print this
     * 
    * *
   * * *
  * * * *
 * * * * *
* * * * * *
 * 
*/

int main(){
    int rowCount;
   cout<<"Enter Number Of Row: ";
   cin>>rowCount;


    for (int row = 0; row < rowCount; row++)
    {
        for (int col = 0; col < rowCount - row - 1; col++)
        {
            cout <<" ";
        }
        
          for (int col = 0; col <  row + 1; col++)
        {
            cout <<"* ";
        }
        cout<<endl;
        
    }

 
    
    

}