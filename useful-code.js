// useful code to copy into bot script

// fill n with number
// fill s with string
// fill b with boolean (rare)

// fillers (ignore)
var n = 0
var s = ""
var b = false

// message utils
msg.a.substring().trim() // get message from s (starting at 0) to the end
msg.p.id // get p id
msg.p.name // get p name
msg.p.color // get p color (hex)

// client changes
MPP.client.setChannel(s) // join room
MPP.client.user.name // client name
MPP.client.user.color // client color
MPP.client.user_id // client _id
MPP.client.user.afk // check afk status

// action arrays

// help needed from other dev(s)
