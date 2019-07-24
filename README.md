# Awesome Project Build with TypeORM + TypeSCript + GraphQL

Steps to run this project:

1. npm install copyfiles -g
2. npm i -g rimraf
3. Run `yarn` command
4. Run `yarn start | yarn dev` command
5. App is running on [http://localhost:4000]

Steps to Build this project:

1. yarn build:server

# Meal Resolver and TypeDefs

Resolvers & TypeDefs | GraphQL Schema for the MealAPi Data are located in src/modules/meals/ingridents

Refer to src/modules/meals/shared for Meals and Error TypeDefs

# Meal API Request

The TypeScript class MealApi <src/class/meals> handle API request and returning foromatted data

# Deploying the Project

1. Create New Heroku Application
2. Provision Heroku container
3. Start Docker
4. Run <src/deploy_server_heroku.sh>

# Example GraphQL Requery

Refer to schema for possible queries

{
  LazyCook(containIds:[52773, 52774, 52775]) {
    meal{
      name
      id
      category
      instructions
    }
    error {
      path
      message
    }
  }
}


{
  LazyCook(containIds:[52773, 52774, 52775]) {
    meal{
			id
      ingredients {
        index
        ingrident
      }
    }
    error {
      path
      message
    }
  }
}