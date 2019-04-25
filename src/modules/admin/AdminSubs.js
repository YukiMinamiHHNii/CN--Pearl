import React from "react";
import { Row } from "reactstrap";
import ResultAlert from "../../components/ResultAlert";
import SubWeaponsList from "../../components/lists/SubWeaponsList";
import ModalLauncher from "../../components/ModalLauncher";
import withAuthorization from "../../components/hocs/withAuthorization";
import * as Operations from "../../utils/Operations";

class AdminSubs extends React.Component {
	state = {
		result: null,
		error: null,
		docId: null
	};
	getResult = data => {
		this.setState({ ...data });
	};
	render() {
		return (
			<Row>
				<ResultAlert data={this.state} />
				<section className="col-sm-12 d-flex flex-wrap">
					<h2 className="mr-3 header">Subweapons management</h2>
					<ModalLauncher
						title="Add new subweapon"
						getResult={this.getResult}
						operation="subWeapon"
					/>
				</section>
				<SubWeaponsList
					append={this.state.docId !== null && this.state.docId}
				/>
			</Row>
		);
	}
}

export default withAuthorization(AdminSubs, Operations.MGT_SUBS);
