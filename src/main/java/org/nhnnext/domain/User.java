package org.nhnnext.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class User extends AbstractPersistable<Long> {

	@NotNull
	private String name;
}
