class Actor
{
    constructor()
    {
        this.hero = 4
    }
    printhero()
    {
        console.log(this.hero)
    }
}
// var someactor=new Actor()
// someactor.printhero()

class ShaktiKapoor extends Actor
{
    constructor()
    {
        super()
        var category= "father"
    }
    Printdata(hero)
    {
    console.log("Father of Actress",this.hero)
    }
}