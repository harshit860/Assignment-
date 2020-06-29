let stateObj = {
  Users: [],
  CurrentUser: {},
  pageSize: 2,
  AllUsers: [],
  startIndex:0,
  stopIndex:2,
  prev:true,
  next:false
}

export default (state = stateObj, action) => {
  switch (action.type) {

    ///////////////////////
    case 'paginate':
      console.log(action)
      let newuser = []
      let start1 = null
      let stop1 = null
      let prevstart = null
      if(action.val === 'next')
      {
      state.AllUsers.map( (element,index) => {
           start1 = state.stopIndex 
           stop1 = state.stopIndex + state.pageSize
           console.log(start1,stop1)
           prevstart = start1
          if(index < stop1 && index >= start1)
          {
              newuser.push(element)
          }
      })
    }
    else if(action.val == 'prev')
    {
      console.log("in prev")
      state.AllUsers.map( (element,index) => {
        start1 = Number(state.startIndex) - Number(state.pageSize)
        stop1 = Number(state.stopIndex)  - Number(state.pageSize)
        console.log(start1,stop1)
       if(index < stop1 && index >= start1)
       {
           newuser.push(element)
       }
   })
    }
    let prev1 = state.prev
    
    let next1 = state.next
    
    return {
      ...state,
      Users:newuser,
      stopIndex:Number(stop1),
      startIndex:Number(prevstart),
      prev:prev1,
      next:next1
      
    }



    case 'saveUsers':
     
      let newUser = []
      action.users.map((element, index) => {
        


        if (state.pageSize >= element.id) {
          console.log(state.pageSize)
          console.log(element)
          newUser.push(element)
        }
      })
      console.log(action.users)
      console.log(newUser)
      return {
        Users: newUser,
        AllUsers: action.users,
        pageSize: state.pageSize,
        startIndex:state.startIndex,
        stopIndex:state.stopIndex
      }


    ///////////////////////////

    case 'pageSize':
      console.log(action.size)
      let newUser1 = []
      
      state.AllUsers.map((element, index) => {
        if (action.size >= element.id) {
          newUser1.push(element)
        }
      })

      console.log(newUser1)
      let prev2 = state.prev
      
    let next2 = state.next
      if(action.size == 10)
      {
        console.log(action.size)
        console.log("inside size")
        prev2 = true,
        next2 = true
      }
      else
      {
        prev2 = false,
        next2 = false
      }
      return {
        pageSize: Number(action.size),
        Users: newUser1,
        AllUsers: state.AllUsers,
        startIndex:0,
        stopIndex:Number(action.size),
        prev:prev2,
        next:next2
      }

    case 'deleteUser':
      let newusers = []
      state.Users.map(user => {
        if (user.id != action.userid) {
          newusers.push(user)
        }

      })
      return {
        Users: newusers,
        startIndex:state.startIndex,
        stopIndex:state.stopIndex
      }

    /////////////////////////////


    case 'SortEmail':
      function merge(arr) {
        if (arr.length <= 1) {
          return arr
        }
        var mid = Math.floor((arr.length) / 2)
        var left = arr.slice(0, mid)
        var right = arr.slice(mid)

        return mergesort(merge(left), merge(right))
      }

      function mergesort(left, right) {
        var leftindex = 0
        var rightindex = 0
        var result = []
        while (leftindex < left.length && rightindex < right.length) {
          if (left[leftindex].email <= right[rightindex].email) {
            result.push(left[leftindex])
            leftindex++
          }
          else {
            result.push(right[rightindex])
            rightindex++
          }
        }
        return result.concat(left.splice(leftindex), right.splice(rightindex))
      }
      let sortedUser = merge(state.Users)

      return {
        ...state,
        Users: sortedUser,
        CurrentUser: state.CurrentUser,
        pageSize: state.pageSize,
        AllUsers: state.AllUsers,
        startIndex:state.startIndex,
        stopIndex:state.stopIndex
      }


    /////////////////////////////////////////////////


    case 'SortName':
      function start(arr) {
        if (arr.length <= 1) {
          return arr
        }
        var mid = Math.floor((arr.length) / 2)
        var left = arr.slice(0, mid)
        var right = arr.slice(mid)

        return End(start(left), start(right))
      }

      function End(left, right) {
        var leftindex = 0
        var rightindex = 0
        var result = []
        while (leftindex < left.length && rightindex < right.length) {
          if (left[leftindex].name <= right[rightindex].name) {
            result.push(left[leftindex])
            leftindex++
          }
          else {
            result.push(right[rightindex])
            rightindex++
          }
        }
        return result.concat(left.splice(leftindex), right.splice(rightindex))
      }
      let SortedUsers = start(state.Users)
      return {...state,
        Users: SortedUsers,
        CurrentUser: state.CurrentUser,
        pageSize: state.pageSize,
        AllUsers: state.AllUsers,
        startIndex:state.startIndex,
        stopIndex:state.stopIndex
      }

    //////////////////////////////


    case 'getUser':
      return {
        CurrentUser: action.user,
        Users: state.Users,
        pageSize: state.pageSize,
        AllUsers: state.AllUsers,
        startIndex:state.startIndex,
        stopIndex:state.stopIndex
      }

    default:
      return state;
  }
};
