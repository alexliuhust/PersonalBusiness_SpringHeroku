package io.alexspringboot.ppmtool.repository;

import io.alexspringboot.ppmtool.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {
    Backlog findBacklogByProjectIdentifier(String Identifier);
}
