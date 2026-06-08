"use server"



// all ideas data 
export const allIdeasData = async () => {
    const res = await fetch(`http://localhost:8000/ideas`)
    const data = await res.json()
    // console.log(data)
    return data
}

// ideas added 
export const addUserIdeasData = async (addIdeaInfo) => {
    const res = await fetch("http://localhost:8000/ideas", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(addIdeaInfo),
    });

    const data = await res.json();
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


// comment delete data
export const deleteComment = async (id) => {
    const res = await fetch(`http://localhost:8000/comments/${id}`, {
        method: "DELETE",
    })
    const data = await res.json()
    return data
}


// my idea section edit button
export const myIdeasUpdateData = async (id, updateData) => {
    const res = await fetch(`http://localhost:8000/ideas/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updateData)
    })
    const data = await res.json()
    return data;
}

// my idea page section DELETE idea
export const myIdeaDeleteData = async (id) => {

    const res = await fetch(`http://localhost:8000/ideas/${id}`, {
        method: "DELETE",
    })
    const data = await res.json()
    return data
}


// my interaction data access getUserCommentsData
export const userCommentData = async (userId) => {
    const res = await fetch(
        `http://localhost:8000/comments/user/${userId}`
    );

    const data = await res.json();
    console.log(data, "comment data")
    return data
};