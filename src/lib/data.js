"use server"



// all ideas data 
export const allIdeasData = async () => {
    const res = await fetch(`http://localhost:8000/ideas`)
    const data = await res.json()
    // console.log(data)
    return data
}

// ideas details data by id
export const singleIdeaDataById = async (id) => {
    const res = await fetch(`http://localhost:8000/ideas/${id}`)
    const data = await res.json()
    // console.log(data, "single") 
    return data
}


// details page comment data post and access
export const commentDataById = async (dataComment) => {

    const res = await fetch(`http://localhost:8000/comments`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(dataComment)
    })
    const data = await res.json()
    // console.log(data, "after comment data")
    return data;

}

// get comments
export const getCommentsData = async (ideaId) => {
    const res = await fetch(`http://localhost:8000/comments/${ideaId}`, {
        cache: "no-store"
    })
    const data = await res.json()
    return data;
}


// update comment
export const updateComment = async (id, editText) => {
    const res = await fetch(`http://localhost:8000/comments/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            comment: editText
        })
    })
    const data = await res.json()
    return data;
}