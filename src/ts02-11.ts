enum Direction {
  Up = 1,
  Down = 3,
  Left = 6,
  Right = 10,
}
console.log(Direction);

enum AppStatus{
    Active = 'Yes',
    InActive = 1,
    OnHoldinng = 2,
    OnStop = 'STOP'
}

function checkStatus(status: AppStatus):void {
    console.log(status)
}

checkStatus(AppStatus.Active)
checkStatus(AppStatus.OnHoldinng)
checkStatus(AppStatus.OnStop)
checkStatus(AppStatus.InActive)
