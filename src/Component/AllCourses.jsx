import React, { use } from 'react';
import Allcourse from './Allcourse';

const AllCourses = ({ allCourses }) => {
  const allCoursesData = use(allCourses);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10">
      {allCoursesData.map((courses) => (
        <Allcourse key={courses.skillId} courses={courses} />
      ))}
    </div>
  );
};

export default AllCourses;
