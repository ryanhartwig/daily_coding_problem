(() => {

  /*
    Good morning! Here's your coding interview problem for today.

    This problem was asked by Airbnb.

    We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. Return a sorted ordering of courses such that we can finish all courses.

    Return null if there is no such ordering.

    For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300']. 

    pseudo

    store course ids and prerequisites in map obj


    coursesTaken = set containing string ids of taken courses
    courses remaining = array containing all courses not yet taken (initialized to all courses)

    first iteration = find course with no prequisites
    while courses remaining length > 0
      find course with prerequisites that meet courses taken
      if no course exists
        return null
      else 
        add to courses taken (push)

  */
    
  const order = (map: Map<string, string[]>) => {
    const coursesTaken: string[] = [];
    let remaining = Array.from(map, ([id]) => id);

    while (remaining.length) {
      const id = remaining.find(courseId => {
        const prerequisites = map.get(courseId);

        return prerequisites?.every(id => coursesTaken.length
          ? coursesTaken.includes(id)
          : !prerequisites.length)
      })

      if (!id) return null;

      coursesTaken.push(id);
      remaining = remaining.filter(r => r !== id);
    }

    return coursesTaken;
  }
  

  const map = new Map<string, string[]>();

  map.set('CSC300', ['CSC100', 'CSC200'])
  map.set('CSC200', ['CSC100'])
  map.set('CSC100', []);

  console.log(order(map));
  
})()