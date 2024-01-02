import os
import openai

# Import prerequisite libraries

# Setting the API key
openai.api_key = os.environ['OPENAI_API_KEY']
print('openai api key',openai.api_key)

# Perform tasks using OpenAI API
#openai.Model.list() # List all OpenAI models