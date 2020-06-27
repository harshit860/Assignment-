let stateObj = {
    Users:[],
    CurrentUser:{}
}

export default (state = stateObj, action) => {
    switch (action.type) {
        case 'saveUsers':
            return {
                Users:action.users
            }
        case 'deleteUser':
            let newusers = []
           state.Users.map(user => {
                if(user.id != action.userid)
                {
                    newusers.push(user)
                }
                
            })
            return {
                Users:newusers
            }
        case 'SortEmail':
            function merge(arr){
                if(arr.length <=1)
                  {
                    return arr
                  }
                var mid = Math.floor((arr.length)/2)
                var left = arr.slice(0,mid)
                var right = arr.slice(mid)
                
               return mergesort(merge(left),merge(right))
              }
              
              function mergesort(left,right)
              {
                var leftindex = 0 
                var rightindex = 0 
                var result = []
                 while(leftindex<left.length && rightindex<right.length)
                   {
                     if(left[leftindex].email <= right[rightindex].email)
                       {
                         result.push(left[leftindex])
                         leftindex++
                       }
                     else
                       {
                         result.push(right[rightindex])
                         rightindex++
                       }
                   }
                return result.concat(left.splice(leftindex),right.splice(rightindex))
              }
              let sortedUser = merge(state.Users)
              
              return {
                  Users:sortedUser
              }
        ///////////////
        case 'SortName' :
            function start(arr){
                if(arr.length <=1)
                  {
                    return arr
                  }
                var mid = Math.floor((arr.length)/2)
                var left = arr.slice(0,mid)
                var right = arr.slice(mid)
                
               return End(start(left),start(right))
              }

              function End(left,right)
              {
                var leftindex = 0 
                var rightindex = 0 
                var result = []
                 while(leftindex<left.length && rightindex<right.length)
                   {
                     if(left[leftindex].name <= right[rightindex].name)
                       {
                         result.push(left[leftindex])
                         leftindex++
                       }
                     else
                       {
                         result.push(right[rightindex])
                         rightindex++
                       }
                   }
                return result.concat(left.splice(leftindex),right.splice(rightindex))
              }
            let SortedUsers = start(state.Users)
            return {
                    Users:SortedUsers
            }
        case 'getUser':
            return {
                CurrentUser:action.user
            }

        default:
            return state;
    }
};
