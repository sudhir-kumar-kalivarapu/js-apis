// let p = new Promise((resolve,reject) => {
//     let a = 1+10
//     if (a === 2){
//         resolve('success')
//     } else {
//         reject('failed')
//     }
// })

// p.then((message)=>{
//     console.log('this is in ths then ' + message)
// }).catch((message)=>{
//     console.log('this is in the catch ' + message)
// })


const userLeft = false
const userWatchingMovies = true

function newPromise() {
    return new Promise((resolve,reject) => {
        if(userLeft) {
            reject({
                name:'User Left',
                message: ':not done:'
            })
        } else if(userWatchingMovies) {
            reject({
                name: 'user watching',
                message: 'done'
            })
        } else {
            resolve('thumbs up')
        }
    })
}

newPromise().then((message) => {
    console.log('Success:' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})