<p align="center">
<img src="roBin/bokken.png" height="300">
</p>

# Ro's Sparring Grounds
This is Ro's repository where projects big and small can be stored.

## To Do
- [x] Initial testing
- [X] Basic Setup
- [ ] Add 10 Usecases

## Use Cases
| Script          | Description                                       | Status        |
| :---            |    :----:                                         |    :----:     |
| lockInspection  | Locks inspections upon completion                 |       🟡      |
| bulkSetSite     | Updates inspection site in bulk                   |       🟡      |
| deactivateUsers | Remove users based on date arg                    |       🔴      | 

## Git Workflows
<div class="mermaid">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#6558ff',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#6558ff',
      'lineColor': '#cad5e2',
      'secondaryColor': '#343232',
      'tertiaryColor': '#fff'
    }
  }
}%%
flowchart LR 
subgraph Basic Git
direction TB
%% [(Database)]
%% (BubbleBox)
%% [Normal Box]
%% ([RoundedBox])
A(Branch created:
'git branch #name#)-->
B(Make changes to
branch)-->
C(Add files to commit:
'git add #filenames#)-- Once all
files added -->
D(Stage push:
'git commit')-->
E(Push staged to branch:
'git push origin #branch_name#')

end
</div>