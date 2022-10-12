#include<iostream>
using namespace std;
class Base{
    public:
        Base(){
            cout<<"Base Default cunstructor"<<endl;
        }
        Base(int x){
            cout<<"Base Parameterized Cunstructor"<<x<<endl;
        }
};
class Derived:public Base{
    public:
        Derived(){
            cout<<"Derived class Default Cunstructor"<<endl;
        }
        Derived(int a){
            cout<<"Derived class Pareameter cunst"<<a<<endl;
        }
        Derived(int x,int y):Base(x){
            cout<<"show~~~~"<<x<<"+"<<y<<"="<<x+y<<endl;
        }

};
int main(){
    Derived* d=new Derived();
    Derived* p=new Derived(4);
    Derived* t=new Derived(4,5);

    return 0;
}