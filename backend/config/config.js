process.env.PORT = process.env.PORT || 3000

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


if(process.env.NODE_ENV === 'dev'){
    process.env.URLBD  = 'mongodb://localhost:27017/Seeda'
}else{
    process.env.URLBD  = 'mongodb://localhost:27017/Seeda'
}