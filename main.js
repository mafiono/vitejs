import demo from 'css/demo.css';

export default function() {
    const app = getApp();
    const { userInfo } = app;
    const { user } = userInfo;
    
    return {
        ...demo,
        template: `
        <div class="w-100">
        <div class="card">
            <div class="card-header">
            <h5 class="card-title mb-3">Welcome to the demo</h5>
            </div>
            <div class="card-body">
            <form class="form-horizontal">
                <div class="form-group">
                <label class="col-sm-2 control-label" for="user">Username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="user" placeholder="Username" value="${user}">
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div class="wraper-container">
                    <div class="row">
                    <div class="col-sm-12">
                    <div class="card">
                    <div class="card-header">
                    <h5 class="card-title mb-3">Roles</h5>

                    </div>
                    <div class="card-body">
                    <div class="row">
                    <div class="col-sm-12">
                    <div class="table-responsive">
                    <table class="table table-striped">
                    <thead>server list</thead>

                    <dev callback={this.onload} class="btn btn-primary">Server List</dev>
                    <tbody>server list</tbody>
                    </table>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

</div>
</div>

export const document = postcss.documentElement;iframeclss="${demo.iframe}";`
    }
}
