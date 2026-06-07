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