#!/bin/bash

# Function to convert component name to kebab-case
to_kebab_case() {
  echo "$1" | awk -F'-' '{ for (i=1; i<=NF; i++) $i=tolower($i) }1' OFS='-'
}

# Function to convert component name to PascalCase
to_pascal_case() {
  echo "$1" | awk -F'-' '{ for (i=1; i<=NF; i++) $i=toupper(substr($i, 1, 1)) substr($i, 2) }1' OFS=''
}

# Check if a component name is provided
if [ -z "$1" ]; then
  echo "Please provide a component name."
  exit 1
fi

COMPONENT_NAME=$(to_kebab_case "$1")
COMPONENT_PASCAL=$(to_pascal_case "$1")
COMPONENT_DIR="$COMPONENT_NAME"
COMPONENTS_INDEX="./index.ts"

cd src/components
# Create the component directory and files with basic content
mkdir -p "$COMPONENT_DIR"

# index.ts
echo "export * from './types'
export * from './$COMPONENT_NAME'
" > "$COMPONENT_DIR/index.ts"

# types.ts
echo "export interface ${COMPONENT_PASCAL}Props {
  className?: string;
}
" > "$COMPONENT_DIR/types.ts"

# component-name.tsx
echo "import type { FC } from 'react';
import { ${COMPONENT_PASCAL}Props } from './types';

export const ${COMPONENT_PASCAL}: FC<${COMPONENT_PASCAL}Props> = (props) => {
  return <div>${COMPONENT_PASCAL}</div>;
}
" > "$COMPONENT_DIR/$COMPONENT_NAME.tsx"

# Other files
touch "$COMPONENT_DIR/utils.ts"
touch "$COMPONENT_DIR/classes.ts"
touch "$COMPONENT_DIR/constants.ts"

# Append export to components index.ts with a new line before
echo "\n export * from './$COMPONENT_NAME'" >> "$COMPONENTS_INDEX"


echo "Component '$COMPONENT_NAME' created successfully."
