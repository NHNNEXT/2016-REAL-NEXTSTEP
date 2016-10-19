package org.nhnnext.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Entity
public class Discussion extends AbstractPersistable<Long> {

	@NotNull
	private String comment;

	@ManyToOne
	private Issue issue;

	@OneToMany(mappedBy = "parent")
	private List<DiscussionReply> replies;
}
