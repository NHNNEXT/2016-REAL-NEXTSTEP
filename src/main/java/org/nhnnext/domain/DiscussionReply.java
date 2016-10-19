package org.nhnnext.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class DiscussionReply extends Discussion {

	@ManyToOne
	private Discussion parent;
}
