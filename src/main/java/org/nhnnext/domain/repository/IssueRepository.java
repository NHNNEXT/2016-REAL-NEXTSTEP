package org.nhnnext.domain.repository;

import org.nhnnext.domain.Issue;
import org.springframework.data.repository.CrudRepository;

public interface IssueRepository extends CrudRepository<Issue, Long> {
}
