var express=require('express');
const app= express();
const port = parseInt(process.env.SERVER_PORT) || 3000;

app.listen(port, function () {
    console.log("Node app is running on port " + port);
});


const tasks=[
    {
        id:1,
        name:"task1",
        completed:false
    },
    {
        id:2,
        name:"task2",
        completed:false
    },
    {
        id:3,
        name:"task3",
        completed:false
    }
];
app.get('/api/tasks',(req,res)=>{
    res.send(tasks);
});

app.get('/api/tasks/:id',(req,res)=>{
    const taskId=req.params.id;
    const task=tasks.find(task=>task.id ===parseInt(taskId));
    if(!task)return res.status(404).send('The task with provided id doesnot found');
    res.send(task);
})

module.exports=app;