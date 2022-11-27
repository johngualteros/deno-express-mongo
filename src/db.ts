import mongoose from 'npm:mongoose';

try{
    const db = await mongoose.connect('mongodb://localhost/taskdb');
    console.log('Database is connected', db.connection.name);
}catch(err){
    console.log(err);
}