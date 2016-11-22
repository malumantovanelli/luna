Feature: User connects to a poll

  Part of the "Conectar-se a um poll" epic

  As an user
  I want to connect to a poll
  in order answer questions

  Scenario: User is not connected to a poll
    Given that user have an access code
    When user enters the code "Teste"
    Then show them a question to be answered