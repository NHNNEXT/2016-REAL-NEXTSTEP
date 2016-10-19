package org.nhnnext.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Entity
public class Issue extends AbstractPersistable<Long> {

	@NotNull
	private String title;

	@ManyToOne
	private Course course;

	@OneToMany(mappedBy = "issue")
	@OrderColumn
	private List<IssueComment> comments;
}
