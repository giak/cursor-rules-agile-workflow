# Dockerfile for Agent Zero
# Using frdel/agent-zero-run as base image

FROM frdel/agent-zero-run:latest

# Metadata
LABEL maintainer="user"
LABEL description="Container for Agent Zero based on frdel/agent-zero-run"
LABEL version="1.0"

# Set the working directory
WORKDIR /app

# The container is ready to use with all dependencies from the base image
# Add any additional configuration or customization below if needed

# Default command when container starts
CMD ["bash"]

