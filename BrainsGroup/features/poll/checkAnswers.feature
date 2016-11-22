Feature: Admin checks answers

  Part of the "Acompanhar as respostas de um poll" epic

  As an Admin
  I want to receive instant feedback
  in order see users given answers

  Scenario: Users are answering a poll
    Given that the poll "Teste" is active
    When a user sends an answer
    Then admin receives that answer immediately in a chart