let person={
    name:'Anna',
    age:25,
    introduce:function(){
        console.log('Hello');
        console.log(`Hello my name is${this.name}`);
    }
}
person.introduce();
person.greet= function(){
    console.log('How you doing?');
    console.log(`I am ${person.name}`);
}
person.greet();