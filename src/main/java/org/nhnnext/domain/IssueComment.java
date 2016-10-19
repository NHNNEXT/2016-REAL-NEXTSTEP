package org.nhnnext.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class IssueComment extends AbstractPersistable<Long> {

	@NotNull
	private String comment;

	@ManyToOne
	private Issue issue;
}
