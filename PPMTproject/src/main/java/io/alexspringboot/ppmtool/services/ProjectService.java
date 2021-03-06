package io.alexspringboot.ppmtool.services;

import io.alexspringboot.ppmtool.domain.Backlog;
import io.alexspringboot.ppmtool.domain.Project;
import io.alexspringboot.ppmtool.domain.User;
import io.alexspringboot.ppmtool.exceptions.ProjectIdException;
import io.alexspringboot.ppmtool.exceptions.ProjectNotFound;
import io.alexspringboot.ppmtool.repository.BacklogRepository;
import io.alexspringboot.ppmtool.repository.ProjectRepository;
import io.alexspringboot.ppmtool.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username) {

        // Make sure only the owner can update the project
        if (project.getId() != null) { // It's UPDATING project
            Project existingProject = projectRepository
                    .findProjectByProjectIdentifier(project.getProjectIdentifier());

            if (existingProject == null) {
                throw new ProjectIdException(
                  "Business ID '" + project.getProjectIdentifier().toUpperCase() + "' does NOT exist");
            }
            // If it tries to update other one's project
            else if (!existingProject.getProjectLeader().equals(username)) {
                throw new ProjectNotFound(
                   "Your Business with ID '" + project.getProjectIdentifier().toUpperCase() + "' does NOT exist");
            }
        }

        try {

            User user = userRepository.findByUsername(username);
            project.setUser(user);
            project.setProjectLeader(user.getUsername());
            String identifier = project.getProjectIdentifier().toUpperCase();
            project.setProjectIdentifier(identifier);

            // When we are CREATING a project, this project has no id, yet
            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(identifier);
            }

            // When we are UPDATING a project, this project must have an id already
            if (project.getId() != null) {
                project.setBacklog(backlogRepository.findBacklogByProjectIdentifier(identifier));
            }

            // Let the database to store this valid project
            return projectRepository.save(project);

        } catch (Exception e) {
            throw new ProjectIdException(
                    "Business ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }
    }

    public Project findProjectByIdentifier(String projectId, String username) {
        Project project = projectRepository.findProjectByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException(
                    "Business ID '" + projectId.toUpperCase() + "' does NOT exist");
        }

        // Only the project owner can access this project
        if (!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFound(
                    "Your Business with ID '" + projectId.toUpperCase() + "' does NOT exist");
        }

        return project;
    }

    public Iterable<Project> findAllProjects(String username) {
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String projectId, String username) {

        projectRepository.delete(findProjectByIdentifier(projectId, username));
    }
}










