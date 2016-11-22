Feature: Admin invites users to participate

  Part of the "Convidar pessoas para participarem de um poll" epic

  As an Admin
  I want to invite users to join a poll
  in order to answer questions

  Scenario: There are no users connected to a poll
    Given that there is a poll
    When the admin requires a code for poll "Teste"
    Then a unique code is given for that poll