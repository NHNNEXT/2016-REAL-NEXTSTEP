package org.nhnnext.web;

import lombok.RequiredArgsConstructor;
import org.nhnnext.domain.Course;
import org.nhnnext.domain.Lecture;
import org.nhnnext.domain.User;
import org.nhnnext.domain.repository.CourseRepository;
import org.nhnnext.domain.repository.LectureRepository;
import org.nhnnext.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
public class TestController {

	private final UserRepository userRepository;
	private final LectureRepository lectureRepository;
	private final CourseRepository courseRepository;

	@GetMapping("/test")
	public String createTestData() {
		User student = new User();
		student.setName("학생 1");
		userRepository.save(student);

		User professor = new User();
		professor.setName("교수 1");
		userRepository.save(professor);

		Lecture lecture = new Lecture();
		lecture.setName("강의 1");
		lecture.getInstructors().add(professor);
		lecture.getInstructors().add(professor);
		lecture.getParticipants().add(student);
		lecture.getParticipants().add(student);
		lectureRepository.save(lecture);

		Course course = new Course();
		course.setTitle("수업 1");
		course.setLecture(lecture);
		courseRepository.save(course);

		return "ok!";
	}
}
