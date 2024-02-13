import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewUnitService implements OnInit{

  usersData: any = [
    {
      "name": "John",
      "email": "John@gmail.com",
      "phone": "817924718",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "sai",
      "email": "sai@gmail.com",
      "phone": "8177898768",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Monesh",
      "email": "mony@gmail.com",
      "phone": "8179123456",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "PJ",
      "email": "pj@gmail.com",
      "phone": "9876543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Swathi",
      "email": "swathi@gmail.com",
      "phone": "9890786756",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Austin",
      "email": "austin@gmail.com",
      "phone": "9111234567",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Matthew",
      "email": "mat@gmail.com",
      "phone": "7890123456",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Luke",
      "email": "luker@gmail.com",
      "phone": "8790123456",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Paula",
      "email": "paula@gmail.com",
      "phone": "6789054321",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Steeve",
      "email": "steeve@gmail.com",
      "phone": "65432109871",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sachin",
      "email": "sachin@gmail.com",
      "phone": "8790123456",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Keerthi",
      "email": "keerthi@gmail.com",
      "phone": "8889902341",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Vaishnavi",
      "email": "vaishu@gmail.com",
      "phone": "9999911111",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Rashmika",
      "email": "rash@gmail.com",
      "phone": "9988776601",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sravya",
      "email": "sravya@gmail.com",
      "phone": "7778890909",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sarath",
      "email": "sarath@gmail.com",
      "phone": "6667789098",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Prashanth",
      "email": "prashanth@gmail.com",
      "phone": "6768690768",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sunanda",
      "email": "sunanda@gmail.com",
      "phone": "9876663211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Martha",
      "email": "martha@gmail.com",
      "phone": "9875553211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Michelle",
      "email": "michelle@gmail.com",
      "phone": "9866643211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Michael",
      "email": "michael@gmail.com",
      "phone": "9876543222",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Adams",
      "email": "adams@gmail.com",
      "phone": "9876555211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Heyden",
      "email": "heyden@gmail.com",
      "phone": "9876544411",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Root",
      "email": "root@gmail.com",
      "phone": "9876543311",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Joel",
      "email": "joel@gmail.com",
      "phone": "9876523411",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Danny",
      "email": "danny@gmail.com",
      "phone": "9876532114",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Shoab",
      "email": "shoab@gmail.com",
      "phone": "9856743211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Imran",
      "email": "imran@gmail.com",
      "phone": "9876131411",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Raheem",
      "email": "raheem@gmail.com",
      "phone": "98765443321",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Azmath",
      "email": "ajju@gmail.com",
      "phone": "9898543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Suresh",
      "email": "suresh@gmail.com",
      "phone": "9876545411",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Raj",
      "email": "raj@gmail.com",
      "phone": "9877743211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Priya",
      "email": "priya@gmail.com",
      "phone": "8876843211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Ramya",
      "email": "ramya@gmail.com",
      "phone": "9876753211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Divya",
      "email": "divya@gmail.com",
      "phone": "9766543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Surya",
      "email": "surya@gmail.com",
      "phone": "9876534211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Vivek",
      "email": "vivek@gmail.com",
      "phone": "9876843211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Robert",
      "email": "robert@gmail.com",
      "phone": "9876543411",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Madhu",
      "email": "mad@gmail.com",
      "phone": "9876546511",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Kajal",
      "email": "kajal@gmail.com",
      "phone": "9877673211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Kala",
      "email": "kala@gmail.com",
      "phone": "7776543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sirisha",
      "email": "sirisha@gmail.com",
      "phone": "7896543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "RK",
      "email": "rk@gmail.com",
      "phone": "7654329811",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sudha",
      "email": "sudha@gmail.com",
      "phone": "79876543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Trivikram",
      "email": "trivikram@gmail.com",
      "phone": "76548793211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Spillburg",
      "email": "spillburg@gmail.com",
      "phone": "7675543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "stephen",
      "email": "stephen@gmail.com",
      "phone": "9879876511",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Vamsiram",
      "email": "vamsi@gmail.com",
      "phone": "6758943211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Rishi",
      "email": "rishi@gmail.com",
      "phone": "8886543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Heren",
      "email": "heren@gmail.com",
      "phone": "9876543331",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Narendra",
      "email": "narendra@gmail.com",
      "phone": "9876543211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    },
    {
      "name": "Sudheer",
      "email": "sudheer@gmail.com",
      "phone": "9867755211",
      "password": "123456",
      "confirm_password": "123456",
      "addresses": [
        {
          "address1": "Test",
          "address2": "Test",
          "city": "Test",
          "state": "Test",
          "zip": "Test"
        }
      ]
    }

  ];

  ngOnInit(): void {
 
  }
  
  constructor(private router: Router) {
    
    for(let i=0; i<this.usersData.length; i++){
      this.usersData[i].id = i+1;
    }
    console.log(this.usersData)
   }

  insertUser(user: any) {
    this.usersData.push(user);
    console.log(this.usersData);
    this.router.navigateByUrl('users')
  }

  updateUser(index: any,userinfo:any){
    this.usersData.splice(index,1,userinfo);
  }

  getUsers() {
    return this.usersData
  }

  getUserById(id:any){
    let k:any='';
    for (let i=0;i<=this.usersData.length;i++){
      if (i == id){
         k = this.usersData[i];
          break;
      }
    }
    return k
  }
}
