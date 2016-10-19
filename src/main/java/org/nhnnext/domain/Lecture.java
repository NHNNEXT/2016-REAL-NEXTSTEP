package org.nhnnext.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.validation.constraints.NotNull;
import java.util.*;

@Data
@Entity
public class Lecture extends AbstractPersistable<Long> {

	@NotNull
	private String name;

	private LectureState state;

	@ManyToMany
	private Collection<User> instructors;

	@ManyToMany
	private Collection<User> participants;

	@OneToMany(mappedBy = "lecture")
	@OrderColumn
	private List<Course> courses;

	void swapCourses(int i, int j) {
		Collections.swap(courses, i, j);
	}
}
